import Link from 'next/link';
import React from 'react';

import HeaderDropDown from '@/components/Header/HeaderDropDown';

const Header = () => {
  return (
    <header className='bg-[#080038] p-12 pt-2 pb-2 flex items-center gap-12 justify-between'>
      <Link
        href='/'
        className='h-12 w-12 bg-white flex justify-center items-center cursor-pointer'
      >
        Logo
      </Link>
      <nav className='flex gap-6'>
        <HeaderDropDown
          dropDownWidth='w-[130px]'
          label='Our School'
          links={[
            {
              label: 'Leadership Team',
              description: '',
              link: '/LeadershipTeam',
            },
            { label: 'Our Mission', description: '', link: '/OurMission' },
            { label: 'Our History', description: '', link: '/OurHistory' },
            { label: 'Careers', description: '', link: '/Careers' },
            {
              label: 'Child Protection',
              description: '',
              link: '/ChildProtection',
            },
          ]}
        />
        <HeaderDropDown
          dropDownWidth='w-[130px]'
          label='Prospective Students'
          links={[
            { label: 'How to apply', description: '', link: '/HowToApply' },
            {
              label: 'School Calendar',
              description: '',
              link: '/SchoolCalendar',
            },
            { label: 'Tuition Fee', description: '', link: '/TuitionFee' },
          ]}
        />
        <HeaderDropDown
          dropDownWidth='w-[200px]'
          label='Academic'
          links={[
            { label: 'Creche', description: '', link: '/Creche' },
            {
              label: 'Nursery School',
              description: '',
              link: '/NurserySchool',
            },
            {
              label: 'Primary School',
              description: '',
              link: '/PrimarySchool',
            },
            {
              label: 'Junior Secondary School',
              description: '',
              link: '/JuniorSecondarySchool',
            },
            {
              label: 'Senior Secondary School',
              description: '',
              link: '/SeniorSecondarySchool',
            },
          ]}
        />
        <HeaderDropDown
          dropDownWidth='w-[200px]'
          label='Student Life'
          links={[
            {
              label: 'Extra Curricular Activities',
              description: '',
              link: '/ExtraCurricularActivities',
            },
          ]}
        />
        <HeaderDropDown
          dropDownWidth='w-[220px]'
          label='Community Life'
          links={[
            {
              label: 'Parents Teacher Association',
              description: '',
              link: '/ParentsTeacherAssociation',
            },
            { label: 'Alumni', description: '', link: '#' },
          ]}
        />
      </nav>
    </header>
  );
};

export default Header;
