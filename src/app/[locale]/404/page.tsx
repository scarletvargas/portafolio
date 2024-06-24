import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ButtonPrimary } from '@/Components';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className='flex flex-col items-start justify-center gap-7 py-32 px-14 xl:px-28 dark:bg-navy200'>
      <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky'>404</p>
      <h3 className='max-w-[350px] font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]'>
        {t('title')}
      </h3>
      <div className='flex flex-col md:flex-row md:items-center gap-7'>
        <Link
          href='/'
          className='text-gray400 dark:text-gray200 hover:text-primary dark:hover:text-sky'
        >
          {t('goBack')}
        </Link>
        <Link target='_blank' href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'>
          <ButtonPrimary>{t('contactMe')}</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}
