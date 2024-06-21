import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ButtonPrimary } from '@/Components';
import { Github, Instagram, Linkedin } from '@/Icons';

interface FooterProps {
  locale: string;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('HomePage.footer');

  return (
    <footer className='bg-navy200 dark:bg-softblue200 text-white dark:text-secondary flex flex-col items-center w-auto pt-[70px]'>
      <div className='max-w-[350px] md:max-w-[600px] flex flex-col items-center justify-center pb-24 gap-7'>
        <h3 className='text-center font-bold text-[30px] md:text-[50px] leading-[38px] md:leading-[70px]'>
          {t('cta.title.a')}
          <span className='text-sky dark:text-primary'>{t('cta.title.b')}</span>
          {t('cta.title.c')}
        </h3>
        <p className='text-center text-gray200 dark:text-gray400 text-base/7'>
          {t('cta.description')}
        </p>
        <Link href='https://www.linkedin.com/in/scarletvargas-systems-engineer/' target='_blank'>
          <ButtonPrimary>{t('cta.button')}</ButtonPrimary>
        </Link>
      </div>
      <hr className='bg-gray400 dark:bg-gray100 w-[330px] md:w-[700px] xl:w-[1130px] h-[1px] border-0' />
      <div className='flex flex-col xl:flex-row justify-center items-start pt-24 gap-12 w-[330px] md:w-[700px] xl:w-[1130px]'>
        <div className='flex flex-col gap-7 xl:w-1/3'>
          <h2 className='text-white dark:text-secondary tracking-wide font-bold text-xl/5'>
            DevScarlet
          </h2>
          <p className='text-lg/7 max-w-[300px] font-medium md:max-w-[350px] xl:w-[300px]'>
            {t('description')}
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-[60px] w-full'>
          <div className='flex flex-col gap-5 w-1/2 xl:pl-56'>
            <p className='text-lg leading-[18px] font-semibold'> {t('usefulLinks')}</p>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href={`/${locale}/projects`}
            >
              {t('links.projects')}
            </Link>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href='/#skills'
            >
              {t('links.skills')}
            </Link>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
              target='_blank'
            >
              {t('links.contact')}
            </Link>
          </div>
          {/* Contact Me */}
          <div className='flex flex-col gap-5 w-1/2'>
            <p className='text-lg leading-[18px] font-semibold'>{t('contactMe')}</p>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Linkedin
                className='stroke-white dark:stroke-secondary group-hover:stroke-primary'
                strokeWidth={1.5}
              />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                Scarlet Vargas
              </p>
            </Link>
            <Link
              target='_blank'
              href='https://github.com/scarletvargas'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Github
                className='stroke-white dark:stroke-secondary group-hover:stroke-primary'
                strokeWidth={1.5}
              />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                scarletvargas
              </p>
            </Link>
            <Link
              target='_blank'
              href='https://www.instagram.com/scarlet.vf/'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Instagram
                className='stroke-white dark:stroke-secondary group-hover:stroke-primary'
                strokeWidth={1.5}
              />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                @scarlet.vf
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12'>
        <p className='text-gray200 dark:text-gray400 max-w-[300px] sm:max-w-none text-center text-sm/6 font-medium'>
          Copyright © {new Date().getFullYear()}{' '}
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
            className='font-semibold hover:text-white dark:hover:text-secondary tracking-wide'
          >
            DevScarlet
          </Link>
          . {t('copyright')}
        </p>
      </div>
    </footer>
  );
};
