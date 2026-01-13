import { useState, useEffect } from 'react';
import { THEME_CONFIG } from '../constants';

export const useTheme = () => {
  const [theme, setTheme] = useState(THEME_CONFIG.light);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === THEME_CONFIG.light ? THEME_CONFIG.dark : THEME_CONFIG.light);
  };

  return { theme, toggleTheme };
};
