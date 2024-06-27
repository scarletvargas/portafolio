import { useTranslations } from 'next-intl';

export const ProjectsHeader: React.FC = () => {
  const t = useTranslations('ProjectsPage');

  return (
    <section className='w-[350px] md:w-[730px] xl:w-[1130px] flex flex-col items-start justify-center gap-2.5 py-[30px] md:pt-[70px] md:pb-[50px] xl:pb-[70px]'>
      <div className='flex flex-col gap-5 items-start justify-center'>
        <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky uppercase'>
          {t('title')}
        </p>
        <h3 className='max-w-[650px] font-bold text-secondary dark:text-white text-[26px] leading-[32px]'>
          {t('description')}
        </h3>
      </div>
    </section>
  );
};
