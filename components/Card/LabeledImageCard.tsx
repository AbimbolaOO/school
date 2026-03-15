import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LabeledImageCardProps {
  src: string;
  alt: string;
  description: string;
}

const LabeledImageCard: React.FC<LabeledImageCardProps> = ({
  src,
  alt,
  description,
}) => {
  return (
    <div className='group grid grid-cols-2 items-stretch gap-4 justify-center align-middle'>
      <div className='relative w-full h-150 group-even:order-last'>
        <Image src={src} alt={alt} fill className='object-cover' />
      </div>

      <div className='self-start text-left my-auto group-even:text-right'>
        <div className='text-amber-300 [font-family:var(--font-saira)] text-[24px]'>
          About
        </div>
        <p className='text-[16px] font-semibold'>{description}</p>
      </div>
    </div>
  );
};

export default LabeledImageCard;
