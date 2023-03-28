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
import Product from './pages/Product'
import DefinitelyNotAdmin from './pages/DefinitelyNotAdmin'

import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Category from './pages/Category'

export default function App() {

  return (

    <div className="bg-white">

      <Navigation />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category/:categoryId" element={<Category />} />
          <Route path="/Winter" element={<Winter />} />
          <Route path="/Maila" element={<Maila />} />
          <Route path="/Water" element={<Water />} />
          <Route path="/Bike" element={<Bike />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/DefinitelyNotAdmin" element={<DefinitelyNotAdmin />} />
        </Routes>
      </div>

      <Footer />

    </div>

  )
}