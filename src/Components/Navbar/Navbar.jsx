"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonSecond from "../ButtonSecond";
import ItemNav from "./ItemNav";
import { Menu } from "@/Icons/Menu";
import { Close } from "@/Icons/Close";
import ChangeTheme from "./ChangeTheme";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Click outside the menu
    const handleClickOutside = (event) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="flex justify-center items-center dark:bg-navy200 relative">
      <nav className="flex flex-col sm:flex-row justify-between items-center p-7 w-full md:w-[810px] xl:w-[1200px] fixed top-0 left-0 right-0 z-30 sm:sticky bg-white dark:bg-navy200">
        <div className="flex flex-row gap-7 justify-between items-center w-full md:w-[810px] xl:w-[1200px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl/5 font-extrabold text-secondary dark:text-white tracking-wide"
          >
            DevScarlet
          </Link>

          {/* Desktop and Tablet Menu  */}
          <ul className="hidden sm:flex flex-row justify-between items-center sm:gap-5 md:gap-7 font-medium text-base/4">
            <ItemNav nameItem="Home" href="/" />
            <ItemNav nameItem="Skills" href="/#skills" />
            <ItemNav nameItem="Projects" href="/#projects" />
            <ChangeTheme className="hidden sm:block" />
            <Link
              className="hidden sm:block"
              target="_blank"
              href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
            >
              <ButtonSecond text="Contact" />
            </Link>
          </ul>

          {/* Mobile Menu */}
          <div className="flex sm:hidden flex-row justify-between gap-7">
            <ChangeTheme />
            {isMenuOpen ? (
              <button onClick={toggleMenu} className="block sm:hidden">
                <Close />
              </button>
            ) : (
              <button onClick={toggleMenu} className="block sm:hidden">
                <Menu />
              </button>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <ul className="sm:hidden flex flex-col py-7 gap-7 items-center justify-center">
            <ItemNav nameItem="Home" href="/" onClick={handleNavLinkClick} />
            <ItemNav
              nameItem="Skills"
              href="/#skills"
              onClick={handleNavLinkClick}
            />
            <ItemNav
              nameItem="Projects"
              href="/#projects"
              onClick={handleNavLinkClick}
            />
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
              >
                <ButtonSecond text="Contact" onClick={handleNavLinkClick} />
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
