"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonSecond from "./ButtonSecond";
import ItemNav from "./ItemNav";
import { Sun } from "@/Icons/Sun";
import { Moon } from "@/Icons/Moon";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="flex justify-center items-center dark:bg-navy200">
      <nav className="flex justify-between items-center p-7 w-80 md:w-[810px] xl:w-[1200px]">
        <Link href="/">
          <p className="text-xl/5 font-extrabold text-secondary dark:text-white">
            DevScar
          </p>
        </Link>
        <ul className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-5 md:gap-7 font-medium text-base/4">
          <ItemNav nameItem="Home" href="/" />
          <ItemNav nameItem="Skills" href="/#skills" />
          <ItemNav nameItem="Projects" href="/#projects" />
          <button onClick={handleChangeTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
            >
              <ButtonSecond text="Contact" />
            </Link>
          </li>
        </ul>
        <button className="block sm:hidden">hola</button>
      </nav>
    </header>
  );
}

export default Navbar;
