import React, { useEffect, useState } from 'react'
import axios from 'axios';

const URL = "http://localhost:3000/products/getproduct.php"

export default function Product() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const criteria = "1002";
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
                <div className="text-2xl font-bold ">Pyöräily</div><br></br>
           
            <div>
            
                {product.map(x => 

                        <div className="grid grid-cols-2 text-xl font-bold gap-5" key={x.productid}>
                            <div className="max-w-2xl"> 

                        <img src={process.env.PUBLIC_URL + x.imgURL} alt={x.productname}></img>
                        </div>

                        <div>{x.productname}<br/><br/><p className="font-normal max-w-2xl">{x.fulldescript}</p><br/>
                        <p className="text-xl font-bold">{x.price} €</p>
                        </div>
                        </div>
                    )}     
            
            </div>
            </main>
        </>
    )
}