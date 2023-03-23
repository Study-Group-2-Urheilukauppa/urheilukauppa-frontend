import xxslogo from '../images/xxs-logo.png'
import Search from '../components/Search'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <header className="relative bg-secondary">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">XXS</span>
                <img
                  className="h-24 w-auto"
                  src={xxslogo}
                  alt=""
                />
              </a>
            </div>

            <div className="text-indigo-600 text-sm font-medium"><a href="#" className="pl-4">Talviurheilu</a>
              <a href="#" className="pl-4">Mailapelit</a>
              <a href="#" className="pl-4">Vesiurheilu</a>
              <a href="#" className="pl-4">Pyöräily</a>
              <a href="#" className="pl-4 pr-10">Kuntoilu</a>
            </div>
            <Search />

            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}