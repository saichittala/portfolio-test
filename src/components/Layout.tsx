import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Menu, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="nav-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Hexagon className="w-8 h-8" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-8">
              <Link to="/about" className="text-[#D0D0D0] hover:text-white transition-colors">
                About
              </Link>
              <a href="/Resume.pdf" className="text-[#D0D0D0] hover:text-white transition-colors">
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="sm:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`sm:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-md border-b border-[#333333] transition-all duration-300 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="px-4 py-8 space-y-6">
            <Link 
              to="/about" 
              className="block text-xl text-[#D0D0D0] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="/Resume.pdf" 
              className="block text-xl text-[#D0D0D0] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="border-t border-[#333333] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-white font-normal">Sai Chittala</span>
              <p className="text-[#808080]">Product Designer</p>
            </div>
            <div className="flex gap-8">
              <a 
                href="https://linkedin.com/in/saichittala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#808080] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://upwork.com/freelancers/~01762e36a0d1eb9abf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#808080] hover:text-white transition-colors"
              >
                Upwork
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;