import Link from 'next/link';

import { ArrowUpRight } from '@/Icons';

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='flex flex-row items-center gap-2 py-4 px-7 rounded-full cursor-pointer bg-secondary dark:bg-primary hover:bg-primary dark:hover:bg-secondary text-white text-base/4'
    >
      {children}
      <ArrowUpRight className='h-5 w-5' />
    </Link>
  );
};
