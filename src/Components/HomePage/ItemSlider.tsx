'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ButtonPrimary } from '@/Components/ButtonPrimary';
import { formatString } from '@/utils/formatString';

interface ItemSliderProps {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  handleHover: (index: number) => void;
  isClasses: boolean;
  data: Project;
}

export const ItemSlider: React.FC<ItemSliderProps> = ({
  index,
  isFirst,
  isLast,
  handleHover,
  isClasses,
  data,
}) => {
  const params = useParams<{ locale: string }>();
  const t = useTranslations('HomePage.sectionProjects');
  const { img, name, description } = data;

  const imageClass = isFirst ? 'rounded-l-5xl' : isLast ? 'rounded-r-5xl' : '';
  return (
    <div
      className={`relative flex ${
        isClasses ? 'flex-2' : 'flex-1'
      } group w-[740px] xl:w-[1130px] h-[500px] duration-150 ease-in`}
      onMouseEnter={() => handleHover(index)}
    >
      <div className='h-[500px] w-auto flex-col justify-center items-center'>
        <Image
          fill
          alt={name}
          src={img}
          className={`h-full ${
            isClasses ? 'grayscale-0' : 'grayscale'
          } object-center object-cover ${imageClass}`}
        />
      </div>
      <div className='z-20 absolute h-full w-full hidden group-hover:flex flex-col items-center justify-center gap-[30px] animate-fadeInY'>
        <p className='py-3 px-[22px] bg-white text-secondary text-[22px]/7 font-bold rounded-xl shadow-3xl'>
          {name}
        </p>
        <p className='py-2 px-3 bg-white text-secondary text-sm leading-[18px] font-normal rounded-xl shadow-3xl'>
          {description}
        </p>
        <Link href={`${params.locale}/projects/${formatString(name)}`}>
          <ButtonPrimary>{t('button')}</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};
