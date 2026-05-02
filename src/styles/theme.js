import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../themes/default';
import GlobalStyles from './globals';

export const ThemeToggleContext = createContext({
  mode: 'light',
  toggle: () => {},
});

export const useThemeMode = () => useContext(ThemeToggleContext);

const Theme = ({ children }) => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        setMode(saved);
        return;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setMode('dark');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
    try { window.localStorage.setItem('theme', next); } catch (e) {}
  };

  const themeObj = mode === 'dark' ? dark : light;

  return (
    <ThemeToggleContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={themeObj}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default Theme;
