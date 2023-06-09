import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import hostURL from '../Constants';

const URL = hostURL + "/api/products/getproducts.php";

export default function Category() {

    const { categoryId } = useParams();
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const criteria = categoryId;
    const address = URL + "/" + criteria;

    const getJson = async () => {
        try {
            const response = await axios.get(address);
            setCategory(response.data.category);
            setProducts(response.data.products);
            setIsLoading(false);
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getJson()
    }, [categoryId])


    return (
        <>  
            {isLoading ? (
                <div className="pt-40 text-center text-2xl font-bold respo">Ladataan sisältöä...</div>
            ) : products.length > 0 ? (
                <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600 respo">
                    <div className="text-md font-bold md:text-lg lg:text-2xl">{category}</div><br></br>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

                        {products.map((result) => (
                            <Link to={`../product/${result.productid}`} key={result.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
                                <img src={process.env.PUBLIC_URL + "../" + result.imgURL} alt={result.productname}></img>
                                <div className="text-xs font-bold sm:text-lg md:text-lg lg:text-lg">{result.productname}</div>
                                <div className="description text-xs hidden md:flex sm:text-sm md:text-base lg:text-lg">{result.descript}</div>
                                {result.sale && (
                                    <p className="text-xs text-alered font-bold sm:text-base md:text-sm lg:text-2xl">{(((100 - result.sale) / 100) * result.price).toFixed(2)}€ ALE-HINTA!</p>
                                )}
                                <div className="text-xs font-bold sm:text-base md:text-sm lg:text-2xl">{result.price} €</div>
                            </Link> 
                        ))}
                    </div>
                </main>
            ) : (
                <NotFound />
            )}
        </>
    )
}
