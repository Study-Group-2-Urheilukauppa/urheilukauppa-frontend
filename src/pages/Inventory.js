import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NotFound from './NotFound';

const URL = "http://localhost:3000/products/allproducts.php"

export default function Inventory() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setProducts(response.data)
                setIsLoading(false);
            }).catch(error => {
                alert(error)
            })
    }, [])

    const updateAmount = (productid, amount) => {
        axios.post('http://localhost:3000/products/allproducts.php', {
            productid,
            amount
        }).then(() => {
            setProducts(prevProducts => {
                const updatedProducts = [...prevProducts];
                const productIndex = updatedProducts.findIndex(product => product.productid === productid);
                updatedProducts[productIndex].amount = amount;
                return updatedProducts;
            });
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <>
            {isLoading ? (
                <div className="pt-40 text-center text-2xl font-bold">Ladataan sisältöä...</div>
            ) : products.length > 0 ? (
                <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                    <div className="text-md font-bold md:text-lg lg:text-2xl">Varasto:</div><br></br>
                    <div className="grid grid-cols-4 gap-5">
                        {products.map((result) => (
                            <div className="shadow-md text-xs sm:text-sm md:text-md lg:text-lg px-2 py-2" key={result.productid}>
                                <b>ID:</b> {result.productid}<br></br>
                                <b>TUOTENIMI:</b> {result.productname}<br></br>
                                <b>TUOTERYHMÄ ID:</b> {result.categoryid}<br></br>
                                <b>TUOTERYHMÄN NIMI:</b> {result.categoryname}<br></br>
                                {result.sale && (
                                    <p><b>ALE-HINTA:</b> {(((100 - result.sale) / 100) * result.price).toFixed(2)}</p>
                                )}
                                <b>HINTA: </b>{result.price} €<br></br>
                                <b>MÄÄRÄ: </b>
                                <input type="number" class="varasto" value={result.amount} onChange={(event) => {
                                    const newAmount = parseInt(event.target.value);
                                    updateAmount(result.productid, newAmount);
                                }}/><br></br><br></br>
                                <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl" onClick={() => updateAmount(result.productid, result.amount)}>Päivitä</button>
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