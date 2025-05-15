
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, item: string) => {
    e.currentTarget.classList.add('animate-click');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-click');
      setActiveItem(item);
    }, 400);
  };

  return (
    <nav className={`py-6 px-6 md:px-12 lg:px-16 flex justify-start sticky top-0 z-40 transition-all duration-300 w-full ${
      scrolled ? 'bg-cream/80 backdrop-blur-sm shadow-sm' : ''
    }`}>
      <ul className="flex space-x-10 md:space-x-12 font-mono text-black">
        <li>
          <Link 
            to="/" 
            className={`text-base font-medium ${activeItem === 'about' ? 'text-black' : ''}`}
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={`text-base font-medium ${activeItem === 'work' ? 'text-black' : ''}`}
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
            className="text-base font-medium"
          >
            Blog External
          </a>
        </li>
        <li>
          <Link 
            to="/" 
            className={`text-base font-medium ${activeItem === 'contact' ? 'text-black' : ''}`}
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
