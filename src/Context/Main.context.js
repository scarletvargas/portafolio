'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const themes = useMemo(() => ['dark', 'light'], []);

  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    themes.map((iterationTheme) => {
      document.documentElement.classList.remove(iterationTheme);
    });

    document.documentElement.classList.add(theme);

    let localTheme = localStorage.getItem('theme') || theme;
    setTheme(localTheme);
  }, [theme, themes]);

  return (
    <MainContext.Provider value={{ themes, theme, setTheme }}>{children}</MainContext.Provider>
  );
};

MainContext.displayName = 'MainContext';

export const useMainContext = () => {
  return useContext(MainContext);
};
