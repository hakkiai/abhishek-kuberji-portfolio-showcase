
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, item: string) => {
    e.currentTarget.classList.add('animate-click');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-click');
      setActiveItem(item);
    }, 400);
  };

  return (
    <nav className="py-6 px-6 md:px-12 lg:px-16 flex justify-center">
      <ul className="flex space-x-10 md:space-x-12">
        <li>
          <Link 
            to="/" 
            className={`nav-link text-base font-medium ${activeItem === 'about' ? 'text-black' : ''}`}
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={`nav-link text-base font-medium ${activeItem === 'work' ? 'text-black' : ''}`}
            onClick={(e) => handleClick(e, 'work')}
          >
            Work
          </Link>
        </li>
        <li>
          <a 
            href="https://github.com/hakkiai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link text-base font-medium"
            onClick={(e) => handleClick(e, 'blog')}
          >
            Blog External
          </a>
        </li>
        <li>
          <Link 
            to="/" 
            className={`nav-link text-base font-medium ${activeItem === 'contact' ? 'text-black' : ''}`}
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
