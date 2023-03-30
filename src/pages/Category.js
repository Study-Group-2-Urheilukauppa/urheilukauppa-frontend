import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';

const URL = "http://localhost:3000/products/getproducts.php"

export default function Category() {

    const { categoryId } = useParams();
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);
    const criteria = categoryId;
    const address = URL + "/" + criteria;

    const getJson = async () => {
        try {
            const response = await axios.get(address);
            setCategory(response.data.category);
            setProducts(response.data.products);
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getJson()
    }, [categoryId])


    return (
        <>  {products ?
            <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
                <div className="text-2xl font-bold">{category}</div><br></br>

                <div className="grid grid-cols-4 gap-5">

                    {products.map((result) => (
                        <Link to={`../product/${result.productid}`} key={result.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
                            <img src={process.env.PUBLIC_URL + "../" + result.imgURL} alt={result.productname}></img>
                            <div className="text-xl font-bold">{result.productname}</div>
                            <div>{result.descript}</div>
                            {result.sale && (
                                <p className="text-xl text-alered font-bold">{(((100 - result.sale) / 100) * result.price).toFixed(2)} € ALE-HINTA!</p>
                            )}
                            <div className="text-xl font-bold">{result.price} €</div>
                        </Link>
                    ))}
                </div>
            </main>
            : <NotFound />}
        </>
    )
}