import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const isDarkMode = true;

  useEffect(() => {
    // Save theme preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'dark');
      console.log('Theme saved to localStorage: dark');
    }
    
    // Apply theme to document
    const root = document.documentElement;
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
    console.log('Dark mode applied to document');
  }, []);

  // Dummy function that does nothing since we're always in dark mode
  const toggleTheme = () => {
    console.log('Theme toggle clicked, but we stay in dark mode');
    // No state change needed
  };

  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};