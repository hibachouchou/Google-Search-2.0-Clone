import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo_google.png'
import { CiLight, CiDark } from 'react-icons/ci';
import { Search } from './pages/Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg flex items-center"
        >
          {darkTheme ? (
            <>
              <CiLight className="mr-1" />
              Light
            </>
          ) : (
            <>
              Dark
              <CiDark className="ml-1" />
            </>
          )}
        </button>

      </div>
      <Search/>
    </div>
  );
};

