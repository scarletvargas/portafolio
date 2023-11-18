'use client';
import { Moon } from '@/Icons/Moon';
import { Sun } from '@/Icons/Sun';
import { useMainContext } from '@/Context/Main.context';

function ChangeTheme({ className }) {
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
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}

export default ChangeTheme;
