import type { Metadata } from 'next';
import '../globals.css';

import { Manrope } from 'next/font/google';

import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'School',
  description: 'Best international school in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased ${manrope.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
