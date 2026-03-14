import React from 'react';

const ChevronDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width='10'
      height='11'
      viewBox='0 0 10 11'
      fill='none'
      className={className}
    >
      <g>
        <path
          d='M8.125 4.5L5 7.625L1.875 4.5'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ChevronDownIcon;
