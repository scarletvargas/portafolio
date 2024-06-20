'use client';

import { Moon, Sun } from '@/Icons';
import { useMainContext } from '@/Context/Main.context';

interface ChangeThemeProps {
  className?: string;
}

export const ChangeTheme: React.FC<ChangeThemeProps> = ({ className }) => {
  const { themes, theme, setTheme } = useMainContext();

  // Function to handle theme change on button click
  const handleChangeTheme = () => {
    let currentIndex = themes.indexOf(theme);
    let nextIndex = currentIndex == 0 ? 1 : 0;
    const nextTheme = themes[nextIndex];

    localStorage.setItem('theme', nextTheme);

    setTheme(nextTheme);
  };

  // Render a button with an icon representing the current theme
  return (
    <button className={className} onClick={handleChangeTheme}>
      {theme === 'light' ? (
        <Moon className='stroke-secondary hover:stroke-primary h-7 w-7' />
      ) : (
        <Sun className='stroke-white hover:stroke-primary h-7 w-7' />
      )}
    </button>
  );
};
