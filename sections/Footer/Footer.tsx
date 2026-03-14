import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#080038] p-12 pt-16 pb-4 flex flex-col gap-12 text-white absolute bottom-0 w-full'>
      <Link
        href='/'
        className='h-18 w-18 bg-white flex justify-center items-center cursor-pointer self-center text-black'
      >
        Logo
      </Link>
      <nav className='flex gap-50 self-center py-24'>
        <div className='flex flex-col gap-4'>
          <div className='text-[18px] mb-4'>Office Hours</div>
          <div className='text-[14px] font-semibold flex flex-col gap-4'>
            <div className='flex gap-4'>
              <Clock3 size={18} /> Mon &mdash; Fri : 8am&mdash;5pm
            </div>
            <div className='flex gap-4'>
              <MapPin size={18} />
              Our school location
            </div>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col gap-4'>
          <div className='text-[18px] mb-4'>Contact Us</div>
          <div className='text-[14px] font-semibold flex flex-col gap-4'>
            <div className='flex gap-4 cursor-pointer hover:text-amber-200'>
              <Phone size={18} /> 080XXXXXXXXX
            </div>
            <div className='flex gap-4 cursor-pointer hover:text-amber-200'>
              <Mail size={18} /> email@school.com
            </div>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col gap-4'>
          <div className='text-[18px] mb-4'>Quick Links</div>
          <div className='text-[14px] font-semibold flex flex-col gap-4'>
            <div className='cursor-pointer hover:text-amber-200'>
              <Link href='/how-to-apply'>How to apply</Link>
            </div>
            <div className='cursor-pointer hover:text-amber-200'>
              <Link href='/school-calendar'>School Calendar</Link>
            </div>
            <div className='cursor-pointer hover:text-amber-200'>
              <Link href='/leadership-team'>Leadership Team</Link>
            </div>
            <div className='cursor-pointer hover:text-amber-200'>
              <Link href='/our-mission'>Our Mission</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className='text-[12px] self-center'>
        &copy; {new Date().getFullYear()} school. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
