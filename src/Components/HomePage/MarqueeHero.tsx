'use client';

import { useEffect, useRef, useState } from 'react';

import { ItemMarqueeHero } from '@/Components/HomePage';
import * as Icons from '@/Icons';

const technologies = [
  { title: 'Javascript', icon: Icons.Javascript },
  { title: 'Typescript', icon: Icons.Typescript },
  { title: 'React', icon: Icons.React },
  { title: 'NextJs', icon: Icons.NextJs },
  { title: 'Redux', icon: Icons.Redux },
  { title: 'Node', icon: Icons.Node },
  { title: 'ExpressJs', icon: Icons.ExpressJs },
  { title: 'NestJS', icon: Icons.NestJs },
  { title: 'MySQL', icon: Icons.Mysql },
  { title: 'MongoDB', icon: Icons.MongoDb },
  { title: 'Prisma', icon: Icons.Prisma },
  { title: 'HTML', icon: Icons.HTML },
  { title: 'CSS', icon: Icons.Css },
  { title: 'TailwindCSS', icon: Icons.TailwindCss },
  { title: 'Bootstrap', icon: Icons.Bootstrap },
  { title: 'Git', icon: Icons.Git },
  { title: 'PHP', icon: Icons.PHP },
  { title: 'Figma', icon: Icons.Figma },
  { title: 'Wordpress', icon: Icons.Wordpress },
];

export const MarqueeHero: React.FC = () => {
  const [direction, setDirection] = useState(1); // 1 for left to right, -1 for right to left
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const handleMarqueeClick = () => {
    // Toggle direction
    setDirection((prevDirection) => prevDirection * -1);
  };

  const handleMarqueeDoubleClick = () => {
    // Toggle pause
    setPaused((prevPaused) => !prevPaused);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setScrollStartX(marqueeRef.current!.scrollLeft);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = event.clientX - dragStartX;
    marqueeRef.current!.scrollLeft = scrollStartX - deltaX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className='mx-auto max-w-[900px]'>
      <div className="overflow-x-hidden px-6 w-full relative before:bg-gradient-to-r after:bg-gradient-to-r after:from-white before:from-white after:dark:from-navy200 before:dark:from-navy200 before:z-20 after:z-20 before:absolute after:absolute before:h-full after:h-full before:w-2/12 after:w-2/12 before:content-[''] after:content-[''] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180">
        <div
          ref={marqueeRef}
          onMouseDown={handleMouseDown}
          className='flex gap-6 overflow-x-scroll scrollbar-none cursor-grab active:cursor-grabbing'
        >
          <div
            onClick={handleMarqueeClick}
            onDoubleClick={handleMarqueeDoubleClick}
            className={`flex shrink-0 items-center flex-row gap-6 ${
              paused ? '' : `animate-marquee`
            } ${direction === -1 ? 'animate-marquee-reverse' : ''}`}
          >
            {technologies.map((tech, i) => (
              <ItemMarqueeHero key={i} title={tech.title} icon={tech.icon} />
            ))}
          </div>
          <div
            onClick={handleMarqueeClick}
            onDoubleClick={handleMarqueeDoubleClick}
            className={`flex shrink-0 items-center flex-row gap-6 ${
              paused ? '' : `animate-marquee`
            } ${direction === -1 ? 'animate-marquee-reverse' : ''}`}
          >
            {technologies.map((tech, i) => (
              <ItemMarqueeHero key={i} title={tech.title} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
