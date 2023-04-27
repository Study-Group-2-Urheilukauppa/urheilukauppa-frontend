import React, { useEffect, useState } from 'react'
import xxslogo from '../images/xxs-logo.png'
import Search from '../components/Search'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { ShoppingCart } from './ShoppingCart'
import { LoginButton } from './LoginButton'
import hostURL from '../Constants'

const URL = hostURL + "/api/products/getcategories.php";

export default function Navigation() {

  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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

            <div className="text-indigo-600 text-sm font-medium test">
              {categories.map(x =>
                <Link className="pl-4 nav-link" to={`/category/${x.categoryid}`} key={x.categoryid}>{x.categoryname}</Link>
              )}
            </div>

            <div className="hamburger">
              <button
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-12 w-12 pt-1 fill-current">
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                </svg>
              </button>
              {isMenuOpen && (
                <div
                className="smooth absolute top-16 p-5 left-0 w-screen bg-fifth"
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                {categories.map((x) => (
                  <Link
                    className="block py-2 px-4 hover:bg-gray-100"
                    to={`/category/${x.categoryid}`}
                    key={x.categoryid}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {x.categoryname}
                  </Link>
                ))}
                <br /><Link className="pl-4 nav-link" to="/Help" onClick={() => setIsMenuOpen(false)}>Asiakaspalvelu</Link>
              </div>
              )}
            </div>

            <div className='searchbar pl-4 ml-auto'>
            <Search />
            </div>
            
            <ShoppingCart />
            <LoginButton />
          </div>
        </div>
      </nav>
    </header>
  )
}