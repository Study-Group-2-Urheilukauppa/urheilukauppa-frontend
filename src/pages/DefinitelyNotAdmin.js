import React from 'react'

export default function AdminPage() {

  return (
    <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center w-600">
    <div>
        <h1>Tämä on Adminsivu</h1>
        <button class="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää tuoteryhmä
        </button>
        <button class="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
            Lisää Tuote
        </button>
    </div>
    </main>
  )
}
