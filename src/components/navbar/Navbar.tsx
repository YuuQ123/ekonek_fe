import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState('/images/ekonek_logo.png');

  // Load logo from localStorage on mount
  useEffect(() => {
    const savedLogo = localStorage.getItem('currentLogo');
    if (savedLogo) {
      setCurrentLogo(savedLogo);
    }
  }, []);

  // Listen for logo changes
  useEffect(() => {
    const handleLogoChange = () => {
      const savedLogo = localStorage.getItem('currentLogo');
      if (savedLogo) {
        setCurrentLogo(savedLogo);
      }
    };

    window.addEventListener('storage', handleLogoChange);
    window.addEventListener('logoChanged', handleLogoChange);
    
    return () => {
      window.removeEventListener('storage', handleLogoChange);
      window.removeEventListener('logoChanged', handleLogoChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-white border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center group">
              <div className="relative">
                <img 
                  src={currentLogo} 
                  alt="EKONEK" 
                  className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                EKONEK
              </span>
            </div>
          </div>

          {/* Navigation Links and Login Button */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-gray-50 rounded-full px-2 py-1 shadow-sm border border-gray-200">
              <a 
                href="/" 
                className="relative text-gray-800 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-orange-50 hover:shadow-sm"
              >
                Home
              </a>
              <a 
                href="#service" 
                className="relative text-gray-800 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-orange-50 hover:shadow-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Service
              </a>
              <a 
                href="#contact" 
                className="relative text-gray-800 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-orange-50 hover:shadow-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
            <a 
              href="/login"
              className="relative ml-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 inline-block text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="relative p-3 text-gray-800 bg-gray-50 hover:bg-orange-50 hover:text-orange-600 focus:outline-none transition-all duration-300 rounded-lg border border-gray-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
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
          <div className="fixed right-0 top-0 h-full w-72 sm:w-80 md:w-96 bg-white shadow-2xl transform transition-all duration-300 ease-in-out border-l border-gray-100">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-white">
                <div className="flex items-center group">
                  <div className="relative">
                    <img 
                      src={currentLogo} 
                      alt="EKONEK" 
                      className="h-8 w-auto mr-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    EKONEK
                  </span>
                </div>
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-700 hover:text-orange-600 focus:outline-none transition-all duration-300 rounded-lg hover:bg-gray-100"
                >
                  <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-2">
                <a 
                  href="/" 
                  className="group relative text-gray-700 hover:text-orange-600 block px-4 py-3 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50"
                  onClick={toggleMobileMenu}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Home
                  </span>
                </a>
                <a 
                  href="#service" 
                  className="group relative text-gray-700 hover:text-orange-600 block px-4 py-3 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileMenu();
                    document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Service
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="group relative text-gray-700 hover:text-orange-600 block px-4 py-3 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/50"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileMenu();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Contact
                  </span>
                </a>
              </div>
              
              {/* Login Button */}
              <div className="p-4 sm:p-6 border-t border-gray-100 bg-white">
                <a 
                  href="/login"
                  className="relative w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-all duration-300 text-sm sm:text-base inline-block text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group overflow-hidden"
                  onClick={toggleMobileMenu}
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
