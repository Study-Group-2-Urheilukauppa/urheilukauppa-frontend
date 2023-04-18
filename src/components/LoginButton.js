import React, { useState } from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  function handleMenuClick() {
    setIsOpen(!isOpen)
  }

  function handleLoginClick() {
    setIsOpen(false)
    navigate("/login")
  }

  function handleRegisterClick() {
    setIsOpen(false)
    navigate("/SignUp")
  }

  return (
    <div className="ml-4 flow-root lg:ml-6 relative">
      <div className="group -m-2 flex items-center p-2">
        <button type="button" onClick={handleMenuClick}>
          <ArrowRightOnRectangleIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-24">
            <div className="bg-secondary shadow-lg rounded-md">
              <div
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-bold"
                onClick={handleLoginClick}
              >
                Kirjaudu
              </div>
              <div
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-bold"
                onClick={handleRegisterClick}
              >
                Registeröidy
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { LoginButton };