"use client";
import { useEffect, useState } from "react";
import ButtonSecond from "./ButtonSecond";
import { ArrowUp } from "@/Icons/ArrowUp";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return isVisible ? (
    <ButtonSecond
      onClick={scrollToTop}
      text={<ArrowUp />}
      additionalClasses="fixed bottom-8 right-8 z-50"
    ></ButtonSecond>
  ) : null;
}

export default ScrollToTopButton;
