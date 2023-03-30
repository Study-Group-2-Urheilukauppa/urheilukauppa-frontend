import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
            <main className="mx-20 mb-auto mt-20 bg-white content-center justify-center">

                <div className="container mx-auto">
                    <div className="flex items-center justify-center w-full h-40 py-24 sm:py-8 px-4 bg-fifth mb-5 border-4 border-alered">
                        <p className="text-5xl font-bold text-alered">ALEN LOPPURYSÄYS!</p>
                    </div></div>

                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={product.length}
                        visibleSlides={4}
                        className="carousel-provider"
                    >
                        
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                        <Slider className="slider">
                            {product.map(x => (
                                <Slide index={x.productid} key={x.productid} className="slide hover:bg-secondary hover:bg-opacity-20">
                                     <Link to={`../product/${x.productid}`} key={x.productid} className="p-2 ">
                                    <div className="max-w-2xl max-h-2xl">
                                        <img src={process.env.PUBLIC_URL + "../" + x.imgURL} alt={x.productname} />
                                        <p className="font-bold">{x.productname}</p>
                                        <p>{x.descript}</p>
                                        <br />
                                        <p className="text-3xl text-alered font-bold">{(((100 - x.sale) / 100) * x.price).toFixed(2)} € ALE-HINTA!</p>
                                        <p className="text-3xl font-bold line-through">{x.price} €</p>
                                    </div>
                                    </Link>
                                </Slide>
                            ))}
                        </Slider>

                    </CarouselProvider>
                </div>

            </main>
        </>
    )
}