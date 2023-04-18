import React, { useState } from 'react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = Cookies.get('token') !== undefined;
  const isAdmin = Cookies.get('role') === 'admin'; // assuming role is stored in a cookie

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleLoginClick() {
    setIsOpen(false);
    navigate('/login');
  }

  function handleLogoutClick() {
    setIsOpen(false);
    Cookies.remove('token');
    Cookies.remove('role');
    navigate('/');
  }

  function handleRegisterClick() {
    setIsOpen(false);
    navigate('/SignUp');
  }

  function handleAdminClick() {
    setIsOpen(false);
    navigate('/DefinitelyNotAdmin');
  }

  const loginText = isLogged ? 'Kirjaudu ulos' : 'Kirjaudu';

  const loginClickHandler = isLogged ? handleLogoutClick : handleLoginClick;

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
                onClick={loginClickHandler}
              >
                {loginText}
              </div>
              {!isLogged && (
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-bold"
                  onClick={handleRegisterClick}
                >
                  Rekisteröidy
                </div>
              )}
              {isLogged && isAdmin && ( // only show if user is logged in and has admin role
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-bold"
                  onClick={handleAdminClick}
                >
                  Hallintapaneeli
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { LoginButton };


