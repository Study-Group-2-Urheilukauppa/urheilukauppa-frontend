import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartDelete, CartDeleteButton, CartGetList } from '../components/ShoppingCart';
import hostURL from '../Constants';

export default function Checkout() {

    const [results, setResults] = useState([]);
    const [cart, setCart] = useState("");
    const [userid, setUserid] = useState("");
    
    const URL = hostURL + "/api/products/getproductlist.php";

    useEffect(() => {
        
        const address = URL + "/" + CartGetList();

        axios.get(address)
            .then((response) => {
              setResults(response.data.products);
            }).catch(error => {
              setResults([]);
            })

        axios.get(hostURL + '/api/checkuser.php', {
          withCredentials: true
          })
          .then((response) => {
            let temp = response.data.userid
            setUserid(temp.toString());
          })
          .catch(error => {
            alert(error);
          })
    }, [])

    

    function handleSubmit() {

      const orderData = {
          userid: userid,
          cart: JSON.parse(window.localStorage.getItem("cart"))
      };
      
      axios.post(hostURL + '/api/products/orders.php', orderData)
        .then(response => {

          if (response.data.success) {
            window.localStorage.removeItem("cart");
            window.location.reload();
            alert("tilaus onnistui!")
          } else {
            // Display an error message
            alert(response.data.message);
        }})
        .catch(error => {
          console.error(error);
        });
      }

    return (
      <>
        <div className="flow-root grid-cols-2 pt-24 check">
          {results.map((result) => (
            <div key={result.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
              <img src={process.env.PUBLIC_URL + "../" + result.imgURL} alt={result.productname} className='h-20'></img>
              <div className="text-xl font-bold">{result.productname}</div>
              <div>{result.descript}</div>
              {result.sale && (
                <p className="text-xl text-alered font-bold">{(((100 - result.sale) / 100) * result.price).toFixed(2)} € ALE-HINTA!</p>
              )}
              <div className="text-xl font-bold">{result.price} €</div>
              <div>
                <CartDeleteButton id={result.productid} />
              </div>
            </div>
          ))}
          <div className='flow-root pt-3 pl-3'>
            <button onClick={handleSubmit} className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl pt" type="button">
              Osta →
            </button>
          </div>
        </div>
      </>
    )
}