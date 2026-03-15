import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import JoinSection from './JoinSection/JoinSection';
import LifeAtSchool from './LifeAtSchool/LifeAtSchool';
import Welcome from './Welcome/Welcome';

export default function HomePage() {
  return (
    <div className=''>
      <HeroSection />
      <Welcome />
      <JoinSection />
      <LifeAtSchool />
    </div>
  );
}
