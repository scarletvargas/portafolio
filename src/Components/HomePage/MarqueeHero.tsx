'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { ItemMarqueeHero } from '@/Components/HomePage';

const technologies = [
  'Javascript',
  'Typescript',
  'React',
  'NextJs',
  'Redux',
  'Node',
  'ExpressJs',
  'NestJs',
  'Mysql',
  'MongoDb',
  'Prisma',
  'HTML',
  'Css',
  'TailwindCss',
  'Bootstrap',
  'Git',
  'PHP',
  'Figma',
  'Wordpress',
];

export const MarqueeHero: React.FC = () => {
  const [direction, setDirection] = useState(1); // 1 for left to right, -1 for right to left
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setPaused(true);
    setDragStartX(event.clientX);
    setScrollStartX(marqueeRef.current!.scrollLeft);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setPaused(true);
    setDragStartX(event.touches[0].clientX);
    setScrollStartX(marqueeRef.current!.scrollLeft);
  };

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setPaused(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setPaused(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = event.clientX - dragStartX;
      marqueeRef.current!.scrollLeft = scrollStartX - deltaX;
      // Change direction based on drag direction
      setDirection(deltaX > 0 ? -1 : 1);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;
      const deltaX = event.touches[0].clientX - dragStartX;
      marqueeRef.current!.scrollLeft = scrollStartX - deltaX;
      setDirection(deltaX > 0 ? -1 : 1);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStartX, scrollStartX, handleMouseUp, handleTouchEnd]);

  return (
    <div className='mx-auto max-w-[900px]'>
      <div className="overflow-x-hidden px-6 w-full relative before:bg-gradient-to-r after:bg-gradient-to-r after:from-white before:from-white after:dark:from-navy200 before:dark:from-navy200 before:z-20 after:z-20 before:absolute after:absolute before:h-full after:h-full before:w-2/12 after:w-2/12 before:content-[''] after:content-[''] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180">
        <div
          ref={marqueeRef}
          onMouseDown={handleMouseDown}
          className='flex gap-6 overflow-x-scroll scrollbar-none cursor-grab active:cursor-grabbing'
        >
          <div
            className={`flex shrink-0 items-center flex-row gap-6 ${!paused && 'animate-marquee'} ${
              direction === -1 && 'animate-marquee-reverse'
            }`}
          >
            {technologies.map((tech, i) => (
              <ItemMarqueeHero key={i} iconName={tech} />
            ))}
          </div>
          <div
            className={`flex shrink-0 items-center flex-row gap-6 ${!paused && 'animate-marquee'} ${
              direction === -1 && 'animate-marquee-reverse'
            }`}
          >
            {technologies.map((tech, i) => (
              <ItemMarqueeHero key={i} iconName={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
