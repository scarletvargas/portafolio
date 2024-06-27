'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ArrowLeft, ArrowRight } from '@/Icons';
import { formatString } from '@/utils/formatString';

export const Carousel: React.FC = () => {
  const params = useParams<{ locale: string }>();
  const t = useTranslations();
  const projects = t.raw('Projects');

  const [currentImage, setCurrentImage] = useState(0);
  const quantity = projects?.length;

  if (!Array.isArray(projects) || quantity === 0) return;

  const nextImage = () => {
    setCurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1);
  };

  return (
    <div className='flex md:hidden justify-center items-center'>
      <div className='flex justify-center items-center relative px-2.5 pt-2.5 max-w-[370px]'>
        {currentImage !== 0 && (
          <button
            onClick={previousImage}
            className='rounded-full left-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20'
          >
            <ArrowLeft />
          </button>
        )}
        {projects.map(
          (project, index) =>
            currentImage === index && (
              <Link
                key={index}
                target='_blank'
                href={`${params.locale}/projects/${formatString(project.name)}`}
              >
                <Image
                  width={350}
                  height={270}
                  className='rounded-5xl object-center object-cover'
                  src={project.img}
                  alt={project.name}
                />
              </Link>
            )
        )}
        {currentImage !== quantity - 1 && (
          <button
            onClick={nextImage}
            className='rounded-full right-4 z-20 absolute p-2.5 backdrop-blur-sm bg-gray400/20'
          >
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};
