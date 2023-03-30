import React from 'react';
import { useLocation,Link } from 'react-router-dom';

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
            <div className="text-xl font-bold">{result.price} €</div>
          </Link>
        ))}

      </div>
    </main>
  )
}

