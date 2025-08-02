import React from 'react';

const NavbarLinks = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
            activeSection === item.id
              ? 'text-primary-600'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          {item.label}
          {activeSection === item.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavbarLinks;
