import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

import { MainProvider } from '@/Context/Main.context';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevScarlet - Frontend Developer',
  description:
    'Explore the world of web development with DevScarlet, a passionate Frontend Developer. Discover innovative projects and captivating web experiences created with React, Next.js, Tailwind CSS, and a variety of frameworks and libraries. Welcome to a journey where aesthetics meets functionality!',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name='theme-color' content='#FFFFFF' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#040217' media='(prefers-color-scheme: dark)' />
      </head>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <MainProvider>
            <Navbar />
            {children}
            <ScrollToTopButton />
            <Footer />
          </MainProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
