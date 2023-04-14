import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NotFound from './NotFound';

const URL = "http://localhost:3000/products/allproducts.php"

export default function Inventory() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setProducts(response.data)
            }).catch(error => {
                alert(error)
            })
    }, [])

    return (
        <>
            {products.length > 0 ? (
                <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                    <div className="text-md font-bold md:text-lg lg:text-2xl">Varasto:</div><br></br>
                    <div className="grid gap-5">
                        {products.map((result) => (
                            <div key={result.productid}>
                                <b>ID:</b> {result.productid}<br></br>
                                <b>TUOTENIMI:</b> {result.productname}<br></br>
                                <b>TUOTERYHMÄ ID:</b> {result.categoryid}<br></br>
                                <b>TUOTERYHMÄN NIMI:</b> {result.categoryname}<br></br>
                                {result.sale && (
                                <p><b>ALE-HINTA:</b> {(((100 - result.sale) / 100) * result.price).toFixed(2)}</p>
                            )}
                            <b>HINTA: </b>{result.price} €<br></br>
                            <b>MÄÄRÄ: </b>{result.amount} kpl
                            </div>
                        ))}
                    </div>
                </main>
            ) : (
                <NotFound />
            )}
        </>
    )
}