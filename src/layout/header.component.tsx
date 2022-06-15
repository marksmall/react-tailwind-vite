import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
  return (
    <header className="w-full flex flex-col items-center justify-between md:flex-row p-5 border-b border-gray-200">
      <a
        href="#"
        className="font-bold text-xl text-green-700 tracking-wide pb-4 md:pb-0"
      >
        tailwindcss mastery
      </a>

      <nav className="md:ml-auto text-sm space-x-4 pb-4 md:pb-0">
        <Link to="/" className="hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-900">
          About
        </Link>
        <Link to="/learn" className="hover:text-gray-900">
          What You'll learn
        </Link>
        <Link to="/pricing" className="hover:text-gray-900">
          Pricing
        </Link>
        <Link to="/faq" className="hover:text-gray-900">
          FAQ
        </Link>
      </nav>

      <button className="bg-green-600 hover:bg-green-800 text-green-800 hover:text-green-600 transition duration-300 shadow hover:shadow-md m-2 p-2 rounded-sm inline-flex items-center">
        <span>Get the course</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 pl-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
