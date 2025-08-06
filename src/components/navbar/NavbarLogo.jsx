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
      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-lg">A</span>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          Atharv Pawar
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Full-Stack Developer</span>
      </div>
    </div>
  );
};

export default NavbarLogo;
