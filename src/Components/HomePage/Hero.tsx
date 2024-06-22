import { useTranslations } from 'next-intl';

export const Hero: React.FC = () => {
  const t = useTranslations('HomePage.introduction');

  return (
    <div className='py-[30px] md:py-[50px] xl:py-[70px] flex justify-center'>
      <div className='flex flex-col justify-center items-center gap-[30px] px-6 py-[30px] md:px-0 md:pt-0 md:pb-5 max-w-sm md:max-w-3xl xl:max-w-7xl'>
        <p className='text-secondary dark:text-white text-xl leading-5 font-medium'>
          {t('greeting')},
        </p>
        <h1 className='text-secondary dark:text-white text-center font-bold text-5xl leading-[3rem] md:text-8xl md:leading-[6rem] xl:text-[160px] xl:leading-[9rem]'>
          {t('role')}
        </h1>
      </div>
    </div>
  );
};
