import Image from 'next/image';
import React from 'react';

const CardDataList = [
  {
    src: '/static/img/img-5.jpg',
  },
  {
    src: '/static/img/img-6.jpg',
  },
  {
    src: '/static/img/img-5.jpg',
  },
  {
    src: '/static/img/img-6.jpg',
  },
  {
    src: '/static/img/img-5.jpg',
  },
  {
    src: '/static/img/img-6.jpg',
  },
  {
    src: '/static/img/img-5.jpg',
  },
  {
    src: '/static/img/img-6.jpg',
  },
];
const LifeAtSchool = () => {
  return (
    <div className='bg-blue-100 flex flex-col py-19'>
      <div className='mx-auto mb-16 text-center'>
        <div className='[font-family:var(--font-unna)] font-extrabold text-[32px] leading-9 mb-4 max-w-150 text-center mx-auto'>
          Life at School International School
        </div>
        <div className='max-w-200 text-center self-center text-[18px]'>
          Life at School International School extends well beyond the school
          day. Clubs, sports, performances and activities help students learn
          teamwork, develop new skills, and gain confidence. Our social media
          and publications keep our community connected with the myriad of
          events occurring around campus.
        </div>
      </div>

      {/* Photo grid */}
      <div className='grid grid-cols-4 gap-4 mx-auto'>
        {CardDataList.map((card, index) => (
          <div
            key={index}
            className='relative w-[300px] h-[300px] bg-taupe-700'
          >
            <Image
              src={card.src}
              alt='Children playing'
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeAtSchool;
