'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { ItemSlider } from '@/Components/HomePage/ItemSlider';

export const Slider: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState(0);
  const t = useTranslations();
  const projects = t.raw('Projects');

  const handleHover = (index: number) => {
    setHoveredItem(index);
  };

  return (
    <div className='hidden md:flex flex-row w-[740px] xl:w-[1130px] h-[500px]'>
      {projects.map((project: Project, index: number) => (
        <ItemSlider
          key={index}
          index={index}
          isFirst={index === 0}
          isLast={index === projects.length - 1}
          handleHover={handleHover}
          isClasses={hoveredItem === index}
          data={project}
        />
      ))}
    </div>
  );
};
