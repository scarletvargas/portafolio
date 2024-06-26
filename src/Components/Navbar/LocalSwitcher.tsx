'use client';

import { useTransition, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import { ArrowDown } from '@/Icons';

export const LocalSwitcher: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      const newPathname = pathname.replace(`/${localeActive}`, `/${locale}`);
      router.replace(newPathname);
    });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block'>
      <button
        className='uppercase flex justify-between gap-1  text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
        onClick={toggleDropdown}
        disabled={isPending}
      >
        {localeActive}
        <ArrowDown className='h-4 w-4' strokeWidth={2.5} />
      </button>
      {isOpen && (
        <div className='absolute z-50 mt-2 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200'>
          <button
            className='block w-full px-4 py-2 text-sm text-left text-navy200 hover:bg-gray100 focus:outline-none'
            onClick={() => onSelectChange('en')}
          >
            EN
          </button>
          <button
            className='block w-full px-4 py-2 text-sm text-left text-navy200 hover:bg-gray100 focus:outline-none'
            onClick={() => onSelectChange('es')}
          >
            ES
          </button>
        </div>
      )}
    </div>
  );
};
