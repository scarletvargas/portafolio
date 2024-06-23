import { useTranslations } from 'next-intl';

import { Slider } from '@/Components/HomePage/Slider';

export const SectionProjects: React.FC = () => {
  const t = useTranslations('HomePage.sectionProjects');
  return (
    <section
      id='projects'
      className='flex flex-col gap-2.5 pt-[60px] pb-[30px] md:py-[50px] xl:pt-[70px] justify-center items-center'
    >
      <div className='max-w-[360px] md:max-w-full flex flex-col gap-5 md:pb-[30px]'>
        <p className='text-center font-bold text-sm leading-[14px] text-primary dark:text-sky'>
          {t('title')}
        </p>
        <h3 className='text-secondary dark:text-white font-bold text-center text-[28px] md:text-[30px] xl:text-[36px] leading-[38px] md:leading-10 xl:leading-[46px] max-w-[650px]'>
          {t('description')}
        </h3>
      </div>
      <Slider />
    </section>
  );
};
