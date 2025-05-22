import React, { createContext, useState, useContext, useEffect } from 'react';

// PUBLIC_INTERFACE
/**
 * Context for managing theme state (dark/light) throughout the application
 */
const ThemeContext = createContext();

// PUBLIC_INTERFACE
/**
 * Provider component that wraps the application to provide theme functionality
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactNode} - ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference or use system preference
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('remindease-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState(getSavedTheme);

  // Apply the theme to the document
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('remindease-theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use theme context
 * @returns {object} Theme context value
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
