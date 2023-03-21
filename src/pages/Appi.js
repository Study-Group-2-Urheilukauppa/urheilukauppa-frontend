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
import Menu from './components/Menu'
import Navbar from './components/Navbar'


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (

    <div className="bg-white">

      <Menu />

      <header className="relative bg-secondary">

        <Navbar />

      </header>

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