
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-10 flex justify-center">
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">Work</Link>
        </li>
        <li>
          <a href="https://github.com/hakkiai" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog External</a>
        </li>
        <li>
          <Link to="/" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
