'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-20 border-b border-gray-600">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex justify-between items-center py-4">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold">
         
            <span className="text-pink-600">Dynamic</span><span className="text-white">Blogs</span>
         
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden sm:flex space-x-6 flex-grow justify-center">
          <Link href="/" className="text-lg hover:text-pink-600 transition duration-300">Home</Link>
          <Link href="/about" className="text-lg hover:text-pink-600 transition duration-300">About</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 ml-auto w-6 h-6">
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-pink-600 transition duration-300">
          
          </Link>
          <Link href="https://www.facebook.com" target="_blank" className="hover:text-pink-600 transition duration-300">
          
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden ml-4 flex items-center">
          <button
            aria-label="Open menu"
            className="text-2xl text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when toggled) */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black text-white py-4`}>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-lg hover:text-pink-600 transition duration-300" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/about" className="text-lg hover:text-pink-600 transition duration-300" onClick={toggleMobileMenu}>About</Link>
        </div>
      </div>
    </nav>
  );
}