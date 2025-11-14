'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrolled(window.scrollY > 50);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-3xl font-bold transition-colors duration-300 text-[#3d3a36] hover:text-[#c9a961]"
            >
              Iraklis
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/gallery" 
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 text-[#3d3a36] hover:text-[#c9a961] group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 text-[#3d3a36] hover:text-[#c9a961] group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 text-[#3d3a36] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c9a961]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white/98 backdrop-blur-md shadow-lg`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/gallery" 
            onClick={closeMenu} 
            className="text-[#3d3a36] hover:bg-[#f5f3f0] hover:text-[#c9a961] block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu} 
            className="text-[#3d3a36] hover:bg-[#f5f3f0] hover:text-[#c9a961] block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
