import React, { useState } from 'react';
import logo from '../assets/Untitled design (3).svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-30 py-2 flex items-center justify-between relative nav-separator">
        {/* Logo container */}
        <div className="h-20 flex items-center overflow-hidden mx-3 py-2">
          <img src={logo} alt="logo" className="h-20 w-auto object-contain m-0 p-0 align-middle" />
        </div>
        
        {/* Hamburger Menu Button (Mobile) */}
        <button 
          className="lg:hidden flex items-center justify-center h-15 w-15 p-0 m-0 rounded-md hover:bg-gray-100 focus:outline-none mx-3 py-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-10 h-10 text-gray-700" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            style={{display: 'block', margin: 'auto'}}
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Home</a>
          <a href="/pricing" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Pricing</a>
          <a href="/blogs" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Blogs</a>
          <a href="/contact-us" className="text-gray-700 hover:text-[var(--brand-orange)] transition-colors">Contact Us</a>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col py-4">
            <a href="/" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Home</a>
            <a href="/blogs" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Blogs</a>
            <a href="/pricing" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Pricing</a>
            <a href="/contact-us" className="px-6 py-3 text-gray-700 hover:text-[var(--brand-orange)] hover:bg-gray-50 transition-colors">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 