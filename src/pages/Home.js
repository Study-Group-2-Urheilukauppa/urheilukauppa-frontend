import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import hostURL from '../Constants';

const URL = hostURL + "/api/products/getsales.php";

export default function Home() {
    const [product, setProduct] = useState([]);
    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {


        axios.get(URL)
            .then((response) => {
                setProduct(response.data)
            }).catch(error => {
                alert(error)
            })
    }, [])

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setVisibleSlides(1);
          } else {
            setVisibleSlides(4);
          }
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);


    return (
        <>
            <main className="mx-20 mb-auto mt-20 bg-white content-center justify-center respo">

                <div className="container mx-auto">
                    <div className="salebg flex flex-col items-center justify-center w-full sm:py-8 px-4 mb-5 border-4 border-alered">
                        <p className="text-md pb-3 sm:text-xl md:text-3xl lg:text-5xl font-bold text-[#fff]">ALEN LOPPURYSÄYS ON NYT TÄÄLLÄ!</p>
                        <p className="text-md sm:text-xl md:text-3xl lg:text-5xl font-bold text-[#fff]">TULE TEKEMÄÄN ELÄMÄSI LÖYDÖT!</p>
                    </div>
                </div>


                <div className="karuselli">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={product.length}
                        visibleSlides={visibleSlides}
                        className="carousel-provider"
                    >

                        <div className="relative h-full">
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
                                        <Link to={`../product/${x.productid}`} key={x.productid}>
                                            <div className="max-w-2xl max-h-2xl p-2">
                                                <img src={process.env.PUBLIC_URL + "../" + x.imgURL} alt={x.productname} />
                                                <p className="text-xs sm:text-sm md:text-md lg:text-lg font-bold">{x.productname}</p>
                                                <p className="text-xs text-alered font-bold sm:text-sm md:text-md lg:text-2xl">{(((100 - x.sale) / 100) * x.price).toFixed(2)} € ALE-HINTA!</p>
                                                <p className="text-xs font-bold sm:text-sm md:text-md lg:text-2xl line-through">{x.price} €</p>
                                            </div>
                                        </Link>
                                    </Slide>

                                ))}
                            </Slider>
                        </div>

                    </CarouselProvider>
                </div>
                

            </main>
        </>
    )
}