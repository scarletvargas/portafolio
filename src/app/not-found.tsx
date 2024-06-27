'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const localeMatch = pathname.match(/^\/(en|es)\//);
    const locale = localeMatch ? localeMatch[1] : null;

    if (locale) {
      router.replace(`/${locale}/404`);
    } else {
      router.replace('/en/404');
    }
  }, [pathname, router]);

  return null;
}
