import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:3000/products/getsales.php"

export default function Home() {
    const [product, setProduct] = useState([]);

    useEffect(() => {


        axios.get(URL)
            .then((response) => {
                setProduct(response.data)
            }).catch(error => {
                alert(error)
            })
    }, [])


    return (
        <>
            <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">

           <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-40 py-24 sm:py-8 px-4 bg-fifth mb-5">
                <p className="text-5xl font-bold text-alered">ALEN LOPPURYSÄYS!</p>
                </div></div>
            
            <div className="grid grid-cols-5 gap-5">
                {product.map(x => 

                        <div key={x.productid}>
                            <div className="max-w-2xl max-h-2xl">

                        <img src={process.env.PUBLIC_URL + "../" + x.imgURL} alt={x.productname}></img>
     
                        <p className="font-bold">{x.productname}</p>
                        <p>{x.descript}</p><br/>
                        <p className="text-3xl text-alered font-bold">{(((100 - x.sale) / 100) * x.price).toFixed(2)} € ALE-HINTA!</p>

                        <p className="text-3xl font-bold line-through">{x.price} €</p>
                        </div>
                        </div>
                    )}     
            </div>
            
            </main>
        </>
    )
}