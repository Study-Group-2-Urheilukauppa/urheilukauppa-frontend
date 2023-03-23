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
import React from 'react'
import Footer from './components/Footer'

import Home from './pages/Home'
import Winter from './pages/Winter'
import Maila from './pages/Maila'
import Water from './pages/Water'
import Bike from './pages/Bike'
import Fitness from './pages/Fitness'
import ShoppingCart from './pages/ShoppingCart'
import Help from './pages/Help'

import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (

    <div className="bg-white">

      <Navigation />

      <Home />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Winter />} />
          <Route path="/" element={<Maila />} />
          <Route path="/" element={<Water />} />
          <Route path="/" element={<Bike />} />
          <Route path="/" element={<Fitness />} />
          <Route path="/" element={<ShoppingCart />} />
          <Route path="/" element={<Help />} />
        </Routes>
      </div>

      <Footer />

    </div>

  )
}