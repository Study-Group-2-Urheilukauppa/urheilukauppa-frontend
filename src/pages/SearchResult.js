import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const results = location.state.results;

  return (
    <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
      <div className="grid grid-cols-4 gap-5">

        {results.map((result) => (
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
      <div className='w-full pt-3 pb-6 text-center'>
      <Link to='/' className=' bg-secondary text-[#fff] pt-2 pl-3 pb-2 pr-3 inline-block border-primary border-2 rounded-3xl hover:bg-fourth'>
                    Tästä takasin etusivulle</Link>
      </div>
    </main>
  )
}

