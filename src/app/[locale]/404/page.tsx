import Link from 'next/link';

import ButtonPrimary from '@/Components/ButtonPrimary';

export default function NotFound() {
  return (
    <div className='flex flex-col items-start justify-center gap-7 py-32 px-14 xl:px-28 dark:bg-navy200'>
      <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky'>404</p>
      <h3 className='max-w-[350px] md:max-w-sm font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]'>
        Page Not Found
      </h3>
      <div className='flex flex-col md:flex-row md:items-center gap-7'>
        <Link
          href='/'
          className='text-gray400 dark:text-gray200 hover:text-primary dark:hover:text-sky'
        >
          Go back to home page
        </Link>
        <Link target='_blank' href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'>
          <ButtonPrimary>Contact Me</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}
