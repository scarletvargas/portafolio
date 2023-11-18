import ButtonPrimary from './ButtonPrimary';
import Link from 'next/link';
import { Linkedin } from '@/Icons/Linkedin';
import { Github } from '@/Icons/Github';
import { Instagram } from '@/Icons/Instagram';

function Footer() {
  return (
    <footer className='bg-navy200 dark:bg-softblue200 text-white dark:text-secondary flex flex-col items-center w-auto pt-[70px]'>
      <div className='max-w-[350px] md:max-w-[600px] flex flex-col items-center justify-center pb-24 gap-7'>
        <h3 className='text-center font-bold text-[30px] md:text-[50px] leading-[38px] md:leading-[70px]'>
          Let&apos;s build an <span className='text-sky dark:text-primary'>Amazing Project</span>{' '}
          Together
        </h3>
        <p className='text-center text-gray200 dark:text-gray400 text-base/7'>
          Along with the newest technologies on the market to create attractive user interfaces! If
          you have any questions, or just want to chat, then click the button below.
        </p>
        <ButtonPrimary text='Contact Me' />
        {/* <marquee></marquee> */}
      </div>
      <hr className='bg-gray400 dark:bg-gray100 w-[330px] md:w-[700px] xl:w-[1130px] h-[1px] border-0' />
      <div className='flex flex-col xl:flex-row justify-center items-start pt-24 gap-12 w-[330px] md:w-[700px] xl:w-[1130px]'>
        <div className='flex flex-col gap-7 xl:w-1/3'>
          <h2 className='text-white dark:text-secondary tracking-wide font-bold text-xl/5'>
            DevScarlet
          </h2>
          <p className='text-lg/7 max-w-[300px] font-medium md:max-w-[350px] xl:w-[300px]'>
            Find out more about me as a frontend developer.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-[60px] w-full'>
          <div className='flex flex-col gap-5 w-1/2 xl:pl-56'>
            <p className='text-lg leading-[18px] font-semibold'>Useful Links</p>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href='/#projects'
            >
              Projects
            </Link>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href='/#skills'
            >
              My Skills
            </Link>
            <Link
              className='text-base leading-[18px] font-medium hover:font-semibold text-gray200 dark:text-gray400 hover:text-white dark:hover:text-secondary'
              href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
              target='_blank'
            >
              Contact
            </Link>
          </div>
          <div className='flex flex-col gap-5 w-1/2'>
            <p className='text-lg leading-[18px] font-semibold'>Contact Us</p>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/scarletvargas-systems-engineer/'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Linkedin className='stroke-white dark:stroke-secondary group-hover:stroke-primary' />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                Scarlet Vargas
              </p>
            </Link>
            <Link
              target='_blank'
              href='https://github.com/scarletvargas'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Github className='stroke-white dark:stroke-secondary group-hover:stroke-primary' />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                scarletvargas
              </p>
            </Link>
            <Link
              target='_blank'
              href='https://www.instagram.com/scarlet.vf/'
              className='flex flex-row items-center gap-2.5 group'
            >
              <Instagram className='stroke-white dark:stroke-secondary group-hover:stroke-primary' />
              <p className='group-hover:text-primary text-base leading-[18px] font-medium'>
                @scarlet.vf
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12'>
        <p className='text-gray200 dark:text-gray400 max-w-[300px] sm:max-w-none text-center text-sm/6 font-medium'>
          Copyright © 2023 <span className='font-semibold tracking-wide '>DevScarlet</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
