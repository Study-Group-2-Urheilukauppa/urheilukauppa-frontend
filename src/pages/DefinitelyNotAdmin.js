import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminPage() {

  return (
    <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
      <div className="text-md font-bold md:text-lg lg:text-2xl">Tämä on Admin-sivu</div><br></br>
    <div className="grid grid-cols-1 gap-5">
        <Link to ='/AddCategory'>
        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää tuoteryhmä
        </button>
        </Link>
        <Link to='/AddProduct'>
        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää tuote
        </button>
        </Link>

        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Tilaukset
        </button>

        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Tilausten käsittely
        </button>

        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Varasto
        </button>

    </div>
    </main>
  )
}
