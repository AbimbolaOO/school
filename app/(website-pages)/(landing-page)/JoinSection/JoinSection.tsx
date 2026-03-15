import React from 'react';

import CardWithImageAndLinks from '@/components/Card/CardWithImageAndLinks';

import { CardDataList } from './JoinSectionData';

const JoinSection = () => {
  return (
    <div className='bg-blue-100 flex flex-col py-19'>
      <div className='mx-auto mb-16 text-center'>
        <div className='[font-family:var(--font-unna)] font-extrabold text-[32px] leading-9 mb-4 max-w-150 text-center mx-auto'>
          Join the international school in lagos
        </div>
        <div className='max-w-200 text-center self-center text-[18px]'>
          The International School is a fully accredited and renowned
          international school in Lagos, Nigeria. We are the only school in
          Lagos offering the International Standard Programme for Primary,
          Secondary Years. As an IB World School established in 1960, ICS
          provides personalized education for students aged 24 months to 18
          years, including a bilingual diploma option. Our supportive community
          and rigorous curriculum prepare students to flourish in today's
          quickly changing world.
        </div>
      </div>

      {/* Scrolling section */}
      <div className='overflow-x-auto flex flex-nowrap gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {CardDataList.map((cardData, index) => (
          <CardWithImageAndLinks
            key={index}
            src={cardData.src}
            alt={cardData.alt}
            description={cardData.description}
            pageLink={cardData.pageLink}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinSection;
