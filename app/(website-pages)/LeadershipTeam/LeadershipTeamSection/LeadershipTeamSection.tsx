import React from 'react';

import LabeledImageCard from '@/components/Card/LabeledImageCard';

import { LeadershipSectionDataList } from './LeadershipSectionData';

const LeadershipTeamSection = () => {
  return (
    <div className='mx-29 text-center px-29 py-12 bg-white z-10 mt-42'>
      <div className='text-amber-300 [font-family:var(--font-saira)] text-[24px]'>
        Leadership Team
      </div>
      <div className='[font-family:var(--font-unna)] text-[24px]'>
        Commitment to the School internal School Mission
      </div>
      <div>
        The school's international Leadership Team is headed by Primary
        Principal Lynda Miller, Middle School Principal Lindy Hirt, CFO Cristian
        García, and Senior School Principal Head of school. Together, they have
        over half a century's worth of experience leading in schools and
        multinational companies around the world. In addition to the wealth of
        knowledge and leadership experience they bring to ICS faculty and staff,
        they embody and embrace the core values of what it means to be
        welcoming, humble, resilient, and committed. Their vision of leadership
        is rooted in robust partnerships with all members of the ICS community
        where each individual is empowered to pursue their passions, reach their
        potential, and fulfil their responsibilities.
      </div>
      <blockquote className='border-l-4 border-amber-300 pl-6 my-6 italic text-left mt-12'>
        <p className='mb-3'>
          As a learning organization, ICS leans on the collective wisdom,
          cultural wealth, expertise, and intellect of each community member in
          order to empower our young people as they chart new paths and forge
          better futures. We are a diverse, inclusive community of individuals
          committed to the pursuit of excellence both in the classroom and
          beyond.
        </p>
        <footer className='text-sm font-semibold not-italic text-amber-300'>
          &mdash; Mr Head of school, Interim Head of School
        </footer>
      </blockquote>

      <div className='flex flex-col gap-12 mt-20'>
        {LeadershipSectionDataList.map((item, index) => (
          <LabeledImageCard
            key={index}
            src={item.src}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeamSection;
