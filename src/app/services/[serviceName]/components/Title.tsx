'use client';
import React, { useState, useEffect } from 'react';
import { PageTitle, SubTitle } from '@/components/text';
import { usePathnameValue } from '@/lib/context/PathNameProvider';

const Title = () => {
  const pathName = usePathnameValue();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const titles: Record<string, string> = {
      'guest-houses': 'Guest Houses',
      commodities: 'Commodities',
      default: '',
    };
    setTitle(titles[pathName]);
  }, [pathName]);
  return (
    <div className='flex gap-4 flex-col'>
      <PageTitle>{title}</PageTitle>
      <SubTitle
        content={['Services', title]}
      />

    </div>
  );
};

export default Title;
