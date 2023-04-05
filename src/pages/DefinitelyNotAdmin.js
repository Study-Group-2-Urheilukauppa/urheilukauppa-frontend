import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminPage() {

  return (
    <main className="mx-20 mb-auto mt-60 bg-white grid content-center justify-center w-600">
    <div>
        <h1>Tämä on Adminsivu</h1>
        <Link to ='/AddCategory'>
        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää tuoteryhmä
        </button>
        </Link>
        <Link to='/AddProduct'>
        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää Tuote
        </button>
        </Link>
    </div>
    </main>
  )
}
