import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardWithImageAndLinksProps {
  src: string;
  alt: string;
  description: string;
  pageLink: string;
}

const CardWithImageAndLinks: React.FC<CardWithImageAndLinksProps> = ({
  src,
  alt,
  description,
  pageLink,
}) => {
  return (
    <div className='w-95 group'>
      <div className='w-95 h-95 grid *:col-span-1 *:row-span-1 *:col-start-1 *:row-start-1 overflow-hidden'>
        <div className='w-95 h-95'>
          <Image
            src={src}
            alt={alt}
            width={380}
            height={380}
            //   fill
            className='object-cover'
          />
        </div>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 text-white w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)] m-auto'>
          <div className='p-2 px-4 rounded-2xl cursor-pointer bg-amber-600 hover:underline'>
            <Link href={pageLink}>Read More</Link>
          </div>
        </div>
      </div>
      <div className='text-[16px] font-semibold text-center p-6'>
        {description}
      </div>
    </div>
  );
};

export default CardWithImageAndLinks;
