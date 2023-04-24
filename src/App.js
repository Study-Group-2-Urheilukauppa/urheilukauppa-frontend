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
import './App.css';
import React from 'react'
import Footer from './components/Footer'

import Home from './pages/Home'
import { ShoppingCart } from './components/ShoppingCart'
import Help from './pages/Help'
import Product from './pages/Product'
import DefinitelyNotAdmin from './pages/DefinitelyNotAdmin'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Category from './pages/Category'
import SearchResult from './pages/SearchResult'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AddProduct from './pages/AddProduct'
import AddCategory from './pages/AddCategory'
import Checkout from './pages/Checkout'
import Inventory from './pages/Inventory'
import Orders from './pages/Orders';
import ProtectedRoutes from './components/ProtectedRoutes';

export default function App() {

  return (

    <div className="bg-white">

      <Navigation />

      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Category/:categoryId" element={<Category />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/SearchResult" element={<SearchResult />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route element={ <ProtectedRoutes />}>
            <Route path="/DefinitelyNotAdmin" element={<DefinitelyNotAdmin />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/AddCategory" element={<AddCategory />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>

      <Footer />

    </div>

  )
}