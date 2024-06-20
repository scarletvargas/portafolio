'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ButtonSecond } from '@/Components';
import { ChangeTheme, ItemNav, LocalSwitcher } from '@/Components/Navbar';
import { Close, Menu } from '@/Icons';

export const Navbar: React.FC = () => {
  const t = useTranslations('HomePage.navigation');

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Click outside the menu
    const handleClickOutside = (event) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
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
    <header className='flex justify-center items-center dark:bg-navy200 relative'>
      <nav className='flex flex-col md:flex-row justify-between items-center p-7 w-full md:w-[810px] xl:w-[1200px] fixed top-0 left-0 right-0 z-30 sm:sticky bg-white dark:bg-navy200'>
        <div className='flex flex-row gap-7 justify-between items-center w-full md:w-[810px] xl:w-[1200px]'>
          {/* Logo */}
          <Link
            href='/'
            className='text-xl/5 font-extrabold text-secondary dark:text-white tracking-wide'
          >
            DevScarlet
          </Link>

          {/* Desktop and Tablet Menu  */}
          <ul className='hidden md:flex flex-row justify-between items-center sm:gap-5 md:gap-7 font-medium text-base/4'>
            <ItemNav nameItem={t('home')} href='/' />
            <ItemNav nameItem={t('skills')} href='/#skills' />
            <ItemNav nameItem={t('projects')} href='/projects' />
            <LocalSwitcher />
            <ChangeTheme className='hidden sm:block' />
            <Link
              className='hidden sm:block'
              target='_blank'
              href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
            >
              <ButtonSecond>{t('contact')}</ButtonSecond>
            </Link>
          </ul>

          {/* Mobile Menu */}
          <div className='flex md:hidden flex-row justify-between gap-7'>
            <LocalSwitcher />
            <ChangeTheme />
            {isMenuOpen ? (
              <button onClick={toggleMenu} className='block md:hidden'>
                <Close className='stroke-secondary hover:stroke-primary dark:stroke-white dark:hover:stroke-primary h-7 w-7' />
              </button>
            ) : (
              <button onClick={toggleMenu} className='block md:hidden'>
                <Menu className='stroke-secondary hover:stroke-primary dark:stroke-white dark:hover:stroke-primary h-7 w-7' />
              </button>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <ul className='md:hidden flex flex-col py-7 gap-7 items-center justify-center'>
            <ItemNav nameItem={t('home')} href='/' onClick={handleNavLinkClick} />
            <ItemNav nameItem={t('skills')} href='/#skills' onClick={handleNavLinkClick} />
            <ItemNav nameItem={t('projects')} href='/projects' onClick={handleNavLinkClick} />
            <li>
              <Link
                target='_blank'
                href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
              >
                <ButtonSecond onClick={handleNavLinkClick}>{t('contact')}</ButtonSecond>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
