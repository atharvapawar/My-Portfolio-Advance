import React from 'react';

const NavbarLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToTop}
      className="flex items-center space-x-2 cursor-pointer group"
    >
     
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          Atharv Pawar
        </span>
      </div>
    </div>
  );
};

export default NavbarLogo;
