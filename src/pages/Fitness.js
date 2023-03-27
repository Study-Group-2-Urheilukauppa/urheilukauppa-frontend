import React, { useEffect, useState } from 'react'
import axios from 'axios';

const URL = "http://localhost:3000/products/getproducts.php"

export default function Fitness() {

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
            <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                <div className="text-2xl font-bold">Kuntoilu</div><br></br>
           
            <div className="grid grid-cols-4 gap-5">
            
                {product.map(x => 
                        <div key={x.productid}>
                        <img src={process.env.PUBLIC_URL + x.imgURL} alt={x.productname}></img>
                        <div className="text-xl font-bold">{x.productname}</div> 
                        <div>{x.descript}</div>
                        <div className="text-xl font-bold">{x.price} €</div>
                        </div>
                    )}     
            
            </div>
            </main>
        </>
    )
}