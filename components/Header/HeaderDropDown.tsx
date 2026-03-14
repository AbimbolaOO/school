import Link from 'next/link';
import React from 'react';

import ChevronDownIcon from '../Icons/ChevronDownIcon';

interface LinkItem {
  label: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
  isNew?: boolean;
  isExternal?: boolean;
}

interface HeaderDropDownProps {
  label: string;
  links?: LinkItem[];
  dropDownWidth?: string;
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({
  label,
  links,
  dropDownWidth,
}) => {
  return (
    <div className='group relative flex h-fit items-center text-[18px] z-50'>
      <div className='flex gap-1 h-fit cursor-pointer items-center text-white'>
        {label} <ChevronDownIcon />
      </div>

      {/* Dropdown content */}
      <div
        className={`invisible absolute top-[calc(100%+20px)] right-0 ${dropDownWidth || 'w-40'}
           bg-amber-600 border-t-4 border-amber-200 group-hover:visible before:content-['']
           before:block before:w-full before:h-5 before:bg-transparent before:-top-6
           before:absolute before:right-0 before:invisible group-hover:before:visible`}
      >
        {/* Empty space div */}
        {links?.map((link, index) => (
          <div
            key={index}
            className='bg-white hover:text-amber-200 w-full text-[14px] font-semibold px-2 py-2 cursor-pointer border-b border-amber-200 last-of-type:border-b-0'
          >
            <Link href={link.link}>{link.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropDown;
