import type { Metadata } from 'next';
import '../globals.css';

import { Manrope, Saira, Unna } from 'next/font/google';

import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';

const manrope = Manrope({ subsets: ['latin'] });
const unna = Unna({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-unna',
});
const saira = Saira({ subsets: ['latin'], variable: '--font-saira' });

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
      <body
        className={`antialiased ${manrope.className} ${unna.variable} ${saira.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
