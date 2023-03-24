import React, { useEffect, useState } from 'react'
import axios from 'axios';

const URL = "http://localhost:3000/products/getproducts.php"

export default function Winter() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        const criteria = "1";
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
            <main className="mb-auto mt-20 bg-white grid content-center justify-center w-600">Talviurheilu
            </main>
            <ol>
                {product.map(x => 
                        <li>{x.productname}</li>
                    )}     
            </ol>
        </>
    )
}