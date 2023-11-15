"use client";
import { useState } from "react";
import Psichomatch from "@/assets/psichomatch.png";
import DevScarlet from "@/assets/devscarlet.png";
import Image from "next/image";
import { ArrowLeft } from "@/Icons/ArrowLeft";
import { ArrowRight } from "@/Icons/ArrowRight";
import Link from "next/link";

const images = [
  {
    nameImg: "PsichoMATCH",
    img: Psichomatch,
    href: "https://psichomatch-xrad.vercel.app/",
  },
  {
    nameImg: "DevScarlet - Frontend Developer",
    img: DevScarlet,
    href: "/",
  },
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const quantity = images?.length;

  if (!Array.isArray(images) || quantity === 0) return;

  const nextImage = () => {
    setCurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1);
  };

  return (
    <div className="flex md:hidden justify-center items-center">
      <div className="flex justify-center items-center relative px-2.5 pt-2.5 pb-12 max-w-[370px]">
        {currentImage !== 0 && (
          <button
            onClick={previousImage}
            className="rounded-full left-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20"
          >
            <ArrowLeft />
          </button>
        )}
        {images.map(
          (image, index) =>
            currentImage === index && (
              <Link key={index} target="_blank" href={image.href}>
                <Image
                  className="rounded-5xl h-[270px] object-center object-cover"
                  src={image.img}
                  alt={image.nameImg}
                />
              </Link>
            )
        )}
        {currentImage !== quantity - 1 && (
          <button
            onClick={nextImage}
            className="rounded-full right-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20"
          >
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
