import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = "http://localhost:3000/products/getproducts.php"

export default function Maila() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const criteria = "4";
        const address = URL + "/" + criteria;

        axios.get(address)
            .then((response) => {
                setProduct(response.data.products)
            }).catch(error => {
                alert(error)
            })
    }, [])


    return (
        <>
            <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                <div className="text-2xl font-bold">Mailapelit</div><br></br>
           
            <div className="grid grid-cols-4 gap-5">
            
                {product.map(x => 
                        <Link to={`../product/${x.productid}`} key={x.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
                        <img src={process.env.PUBLIC_URL + x.imgURL} alt={x.productname}></img>
                        <div className="text-xl font-bold">{x.productname}</div> 
                        <div>{x.descript}</div>
                        <div className="text-xl font-bold">{x.price} €</div>
                        </Link>
                    )}     
            
            </div>
            </main>
        </>
    )
}