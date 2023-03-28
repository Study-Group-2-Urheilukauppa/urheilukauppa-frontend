import React, { useEffect, useState } from 'react'
import xxslogo from '../images/xxs-logo.png'
import Search from '../components/Search'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const URL = "http://localhost:3000/products/getcategories.php"

export default function Navigation() {

  const {categoryId} = useParams();
  const [categories, setCategories] = useState([]);


  useEffect(() => {

      const criteria = categoryId;
      const address = URL + "/" + criteria;

      axios.get(address)
          .then((response) => {
              setCategories(response.data);
          }).catch(error => {
              alert(error)
          })
  }, [])

  return (
    <header className="fixed top-0 w-full bg-secondary z-50">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">

            {/* Logo */}
            <div className="ml-4 w-24 lg:ml-0">
              <Link to="/">
                <span className="sr-only">XXS</span>
                <img
                  className="h-24 w-auto max-w-none"
                  src={xxslogo}
                  alt=""
                />
              </Link>
            </div>

            <div className="text-indigo-600 text-sm font-medium">
            {categories.map(x => 
                        <Link className="pl-4 nav-link" to={`/category/${x.categoryid}`} key={x.categoryid}>{x.categoryname}</Link>
                    )}  
            </div>
            <Search />

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <Link to="/ShoppingCart" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}