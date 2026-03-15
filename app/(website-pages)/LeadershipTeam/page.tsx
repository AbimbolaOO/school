import Image from 'next/image';
import React from 'react';

import LeadershipTeamSection from './LeadershipTeamSection/LeadershipTeamSection';

function LeadershipTeam() {
  return (
    <div className='bg-blue-100 grid *:col-span-1 *:row-span-1 *:col-start-1 *:row-start-1'>
      <div className='relative w-full h-80'>
        <Image
          src='/static/img/img-8.jpg'
          alt='Leadership Team'
          // width={500}
          // height={300}
          fill
          className='object-cover'
        />
      </div>
      <LeadershipTeamSection />
    </div>
  );
}

export default LeadershipTeam;
