import React, { useEffect, useState } from 'react'
import axios from 'axios';

const URL = "http://localhost:3000/products/getproducts.php"

export default function Bike() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const criteria = "2";
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
            <main className="mb-auto mt-20 bg-white grid content-center justify-center w-600">Pyöräily
            </main>
            <ol>
                {product.map(x => 
                        <div>
                        <li>{x.productname}, {x.descript}</li>
                        <img src={process.env.PUBLIC_URL + x.imgURL}></img>
                        </div>
                    )}     
            </ol>
    
        </>
    )
}