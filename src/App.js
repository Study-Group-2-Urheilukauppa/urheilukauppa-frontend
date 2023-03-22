/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import Navbar from './components/Navbar'

export default function App() {
 
  return (

    <div className="bg-white">

        <Navbar />

      <main className="mb-auto mt-10 bg-white grid content-center justify-center w-600">Content

      </main>

      <footer>
        <div className='relative'>
          <div className='fixed bottom-0 bg-secondary w-full h-16 grid content-center justify-center'>
            your text
          </div>
        </div>
      </footer>

    </div>

  )
}