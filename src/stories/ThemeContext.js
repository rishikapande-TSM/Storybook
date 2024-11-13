import React, { createContext, useState, useContext } from 'react';

// Define your themes
const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#121212',
    text: '#ffffff',
  },
};

// Create the ThemeContext
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// getTheme function to return the theme object based on the theme name
export const getTheme = (themeName) => themes[themeName] || themes.light;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
