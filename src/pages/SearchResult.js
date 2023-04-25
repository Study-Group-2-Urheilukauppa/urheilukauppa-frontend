import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const results = location.state.results;

  if (results.length === 0) {
    return (
      <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
        <div className="text-xl font-bold text-center">Ei hakutuloksia<br /><br /></div>
        <div className='w-full pt-3 pb-6 text-center'>
          <Link to='/' className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Tästä takasin etusivulle
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

        {results.map((result) => (
          <Link to={`../product/${result.productid}`} key={result.productid} className="hover:bg-secondary hover:bg-opacity-20 p-2">
            <img src={process.env.PUBLIC_URL + "../" + result.imgURL} alt={result.productname}></img>
            <div className="text-xs font-bold">{result.productname}</div>
            <div className='description'>{result.descript}</div>
            {result.sale && (
              <p className="text-xs text-alered font-bold">{(((100 - result.sale) / 100) * result.price).toFixed(2)} € ALE-HINTA!</p>
            )}
            <div className="text-xs font-bold">{result.price} €</div>
          </Link>
        ))}

      </div>
      <div className='w-full pt-3 pb-6 text-center'>
        <Link to='/' className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
          Tästä takasin etusivulle
        </Link>
      </div>
    </main>
  );
}