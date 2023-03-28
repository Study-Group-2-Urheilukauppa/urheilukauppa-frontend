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
import ShoppingCart from './pages/ShoppingCart'
import Help from './pages/Help'
import Product from './pages/Product'
import DefinitelyNotAdmin from './pages/DefinitelyNotAdmin'
import Feedback from './pages/Feedback'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Category from './pages/Category'
import SearchResult from './pages/SearchResult'

export default function App() {

  return (

    <div className="bg-white">

      <Navigation />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category/:categoryId" element={<Category />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/DefinitelyNotAdmin" element={<DefinitelyNotAdmin />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Routes>
      </div>

      <Footer />

    </div>

  )
}