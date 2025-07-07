import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/institut', label: 'Institut' },
    { path: '/studieren-am-sai', label: 'Studium' },
    { path: '/forschung', label: 'Forschung' },
    { path: '/personen', label: 'Personen' },
    { path: '/aktuelles', label: 'News und Events' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      {/* University Header */}
      <div className="bg-red-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="https://www.uni-heidelberg.de" className="hover:text-red-200 transition-colors">
              Universität Heidelberg
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-red-200 transition-colors"
            >
              <Search size={16} />
            </button>
            <select className="bg-transparent border-none text-white text-sm">
              <option value="de">DE</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-red-800 border-t border-red-700">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Suche..."
                className="flex-1 px-4 py-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-md text-white transition-colors"
              >
                Suchen
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SAI</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-red-900">Südasien-Institut</h1>
                <p className="text-gray-600 text-sm">Universität Heidelberg</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-red-100 text-red-900'
                      : 'text-gray-700 hover:text-red-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-red-100 text-red-900'
                      : 'text-gray-700 hover:text-red-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;