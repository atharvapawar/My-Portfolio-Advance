import React, { useState, useEffect } from 'react';

const NavbarBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Close menu when resizing to desktop
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile, isMenuOpen]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center space-x-4">

      {/* Resume Button */}
      <a
        href="/Resume1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-sm transform hover:scale-105 active:scale-95"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Resume
      </a>

      {/* Mobile Menu Button - Always visible on mobile, hidden on desktop */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="mobile-menu-button p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in" 
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '64px' }} // Height of navbar
        />
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="mobile-menu-container fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-lg z-50 animate-fade-in">
          <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <a
              href="/Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarBtn;
