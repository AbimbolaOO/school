import Image from 'next/image';
import React from 'react';

const Welcome = () => {
  return (
    <div className='h-[calc(100vh-64px)] px-29 bg-blue-100 flex gap-20 items-center'>
      {/* left */}
      <div className='h-[calc(100vh-64px)] w-150 relative overflow-hidden flex '>
        <Image
          src='/static/img/img-4.jpg'
          alt='Welcome Image'
          //   width={500}
          //   height={300}
          fill
          className='object-cover'
        />
      </div>

      {/* right */}
      <div className='w-150 text-black'>
        <h1 className='text-amber-800 text-[16px] [font-family:var(--font-saira)]'>
          Welcome to
        </h1>
        <h2 className='text-[#080038] font-extrabold text-[32px] [font-family:var(--font-unna)]'>
          School International School
        </h2>
        <p className='text-[18px]'>
          School International School is part of the worldwide family of schools
          run by the Society of schools in Abuja, Nigeria in Africa. With them,
          it shares a common vision and philosophy derived from the writings of
          the founder of the school, school. All schools and their alumni are
          linked internationally, regionally and nationally and share
          development programs in common. Although all schools are linked in
          that they draw from the same educational philosophies, each school is
          unique in the way that it adapts to its particular circumstances. The
          Mission Statement and other contents of this website which flow from
          it are our attempt to be both authentically school and relevant to the
          Nigerian society that we serve.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
