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
import Footer from './components/Footer'
import Home from './pages/Home'
import Navigation from './components/Navigation'

export default function App() {

  return (

    <div className="bg-white">

      <Navigation />

      <Home />

      <Footer />

    </div>

  )
}