import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartGetList } from '../components/ShoppingCart';
import hostURL from '../Constants';

export default function Checkout() {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const URL = hostURL + "/api/products/getproductlist.php";

    useEffect(() => {
        
        const address = URL + "/" + CartGetList();

        axios.get(address)
            .then((response) => {
                setResults(response.data.products);
                setIsLoading(false);
            }).catch(error => {
                alert(error);
                setIsLoading(false);
            })
    }, [])

    return (
      <>
        <div className="grid grid-cols-2 pt-24">
          {results.map((result) => (
            <div key={result.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
              <img src={process.env.PUBLIC_URL + "../" + result.imgURL} alt={result.productname} className='h-20'></img>
              <div className="text-xl font-bold">{result.productname}</div>
              <div>{result.descript}</div>
              {result.sale && (
                <p className="text-xl text-alered font-bold">{(((100 - result.sale) / 100) * result.price).toFixed(2)} € ALE-HINTA!</p>
              )}
              <div className="text-xl font-bold">{result.price} €</div>
            </div>
          ))}
          <div className='pt-3 pl-3'>
            <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl pt" type="button">Osta →</button>
          </div>
        </div>
      </>
    )
}