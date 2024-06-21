'use client';

import { useEffect, useState } from 'react';

import { ButtonSecond } from '@/Components/ButtonSecond';
import { ArrowUp } from '@/Icons';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return isVisible ? (
    <ButtonSecond onClick={scrollToTop} additionalClasses='fixed bottom-8 right-8 z-50'>
      <ArrowUp />
    </ButtonSecond>
  ) : null;
};
