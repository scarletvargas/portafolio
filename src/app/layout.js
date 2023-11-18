import { Poppins } from 'next/font/google';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import ScrollToTopButton from '@/Components/ScrollToTopButton';
import { MainProvider } from '@/Context/Main.context';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'DevScarlet - Frontend Developer',
  description:
    'Explore the world of web development with DevScarlet, a passionate Frontend Developer. Discover innovative projects and captivating web experiences created with React, Next.js, Tailwind CSS, and a variety of frameworks and libraries. Welcome to a journey where aesthetics meets functionality!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <MainProvider>
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
