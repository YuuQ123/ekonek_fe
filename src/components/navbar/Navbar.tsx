import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/images/ekonek_logo.png" 
                alt="EKONEK" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-black">
                EKONEK
              </span>
            </div>
          </div>

          {/* Navigation Links and Login Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <a 
                href="/" 
                className="text-black hover:text-[#FF9809] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="/service" 
                className="text-black hover:text-[#FF9809] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Service
              </a>
              <a 
                href="/contact" 
                className="text-black hover:text-[#FF9809] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            <button className="bg-transparent border border-gray-300 hover:bg-[#FF9809] hover:border-[#FF9809] text-black hover:text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-black hover:text-[#FF9809] focus:outline-none focus:text-[#FF9809] transition-colors duration-200"
            >
              <img 
                src="/icons/ic_hamburger.svg" 
                alt="Menu" 
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu sidebar */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Overlay */}
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMobileMenu}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img 
                    src="/images/ekonek_logo.png" 
                    alt="EKONEK" 
                    className="h-6 w-auto mr-2"
                  />
                  <span className="text-xl font-bold text-black">
                    EKONEK
                  </span>
                </div>
                <button 
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-[#FF9809] focus:outline-none transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6 space-y-4">
                <a 
                  href="/" 
                  className="text-black hover:text-[#FF9809] block px-3 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
                <a 
                  href="/service" 
                  className="text-black hover:text-[#FF9809] block px-3 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Service
                </a>
                <a 
                  href="/contact" 
                  className="text-black hover:text-[#FF9809] block px-3 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </div>
              
              {/* Login Button */}
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-transparent border border-gray-300 hover:bg-[#FF9809] hover:border-[#FF9809] text-black hover:text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
