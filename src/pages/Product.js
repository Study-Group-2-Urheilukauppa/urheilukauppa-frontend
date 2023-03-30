import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const URL = "http://localhost:3000/products/getproduct.php"

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const criteria = productId;
        const address = URL + "/" + criteria;

        axios.get(address)
            .then((response) => {
                setProduct(response.data)
            }).catch(error => {
                alert(error)
            })
    }, [])


    return (
        <> { (!product.length == 0) ?
            <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">

                <div>

                    {product.map(x => {
                        if (x.sale !== null) {
                            return (
                                <div className="grid grid-cols-2 text-xl font-bold gap-5" key={x.productid}>
                                    <div className="max-w-2xl">

                                        <img src={process.env.PUBLIC_URL + "../" + x.imgURL} alt={x.productname}></img>
                                    </div>

                                    <div>{x.productname}<br /><br /><p className="font-normal max-w-2xl">{x.fulldescript}</p><br />
                                        <p className="text-3xl text-alered font-bold">{(((100 - x.sale) / 100) * x.price).toFixed(2)} € ALE-HINTA!</p>
                                        <p className="text-3xl font-bold line-through">{x.price} €</p>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="grid grid-cols-2 text-xl font-bold gap-5" key={x.productid}>
                                    <div className="max-w-2xl">

                                        <img src={process.env.PUBLIC_URL + "../" + x.imgURL} alt={x.productname}></img>
                                    </div>

                                    <div>{x.productname}<br /><br /><p className="font-normal max-w-2xl">{x.fulldescript}</p><br />
                                        <p className="text-3xl font-bold">{x.price} €</p>
                                    </div>
                                </div>
                            )
                        }


                    })}

                </div>
            </main>
           : <NotFound /> }
        </>
    )
}