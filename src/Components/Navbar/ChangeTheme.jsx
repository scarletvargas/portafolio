"use client";
import { useEffect, useState } from "react";
import { Moon } from "@/Icons/Moon";
import { Sun } from "@/Icons/Sun";

function ChangeTheme({ className }) {
  // Initialize the theme state based on localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check if the system prefers a dark color scheme
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Retrieve the theme from localStorage
    const localStorageTheme = localStorage.getItem("theme");

    // Set the initial theme based on localStorage or system preference
    if (
      localStorageTheme === "dark" ||
      (!localStorageTheme && systemPrefersDark)
    ) {
      return "dark";
    } else {
      return "light";
    }
  });

  // Effect to update the HTML element class and localStorage when theme changes
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    // Apply or remove the 'dark' class based on the selected theme
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    // Update the localStorage when theme changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to handle theme change on button click
  const handleChangeTheme = () => {
    // Toggle between 'light' and 'dark' themes
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Render a button with an icon representing the current theme
  return (
    <button className={className} onClick={handleChangeTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ChangeTheme;