'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { ArrowLeft, ArrowRight } from '@/Icons';

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const quantity = images?.length;

  const nextImage = useCallback(() => {
    setCurrentImage((currentImage + 1) % quantity);
  }, [quantity, currentImage]);

  const previousImage = useCallback(() => {
    setCurrentImage((currentImage - 1 + quantity) % quantity);
  }, [quantity, currentImage]);

  const goToImage = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextImage]);

  if (quantity === 0) return null;

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center relative px-2.5 pt-2.5 pb-12 w-screen h-[400px] md:h-[500px] xl:h-[600px]'>
        <button
          onClick={previousImage}
          className='rounded-full left-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20 dark:text-secondary text-white'
        >
          <ArrowLeft />
        </button>
        {images.map(
          (image, index) =>
            currentImage === index && (
              <Image
                key={index}
                priority
                fill
                className='object-center object-cover h-full w-full'
                src={image}
                alt={`Image ${index + 1}`}
              />
            )
        )}
        <button
          onClick={nextImage}
          className='rounded-full right-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20 dark:text-secondary text-white'
        >
          <ArrowRight />
        </button>
        <div className='space-x-1 absolute bottom-4 z-20 backdrop-blur-sm bg-gray400/20 rounded-full px-2.5 py-0.5'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                currentImage === index ? 'bg-white dark:bg-secondary' : 'bg-white/40 dark:bg-secondary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
