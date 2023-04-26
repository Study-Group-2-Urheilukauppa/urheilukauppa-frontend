import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { CartButton } from '../components/ShoppingCart';

const URL = "http://localhost:3000/api/products/getproduct.php"

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const criteria = productId;
        const address = URL + "/" + criteria;

        axios.get(address)
            .then((response) => {
                setProduct(response.data);
                setIsLoading(false);
            }).catch(error => {
                alert(error);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            {isLoading ?
                <div className="pt-40 text-center text-2xl font-bold">Ladataan sisältöä...</div>
                :
                (!product.length == 0) ?
                    <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                        <div className="grid grid-cols-2 text-xl gap-5">
                            <div className="max-w-2xl">
                                <img src={process.env.PUBLIC_URL + "../" + product[0].imgURL} alt={product[0].productname}></img>
                            </div>
                            <div>
                                <div className="text-xs font-bold sm:text-sm md:text-md lg:text-lg">
                                    {product[0].productname}
                                </div><br />
                                <div className="text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
                                    {product[0].fulldescript}
                                </div><br />

                                {(product[0].sale !== null) ?
                                    <div>
                                        <div className="text-xs text-alered font-bold sm:text-sm md:text-md lg:text-2xl">
                                            {(((100 - product[0].sale) / 100) * product[0].price).toFixed(2)} € ALE-HINTA!
                                        </div>
                                        <div className="text-xs font-bold sm:text-sm md:text-md lg:text-2xl line-through">
                                            {product[0].price} €
                                        </div>
                                    </div>
                                    :
                                    <div className="text-3xl font-bold">{product[0].price} €</div>
                                }
                                <br />
                                <CartButton id={product[0].productid} />
                            </div>
                        </div>
                    </main>
                    :
                    <NotFound />
            }
        </>
    )
}
