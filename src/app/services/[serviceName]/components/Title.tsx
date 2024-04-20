'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PageTitle, SubTitle } from '@/components/text';

const Title = () => {
  const pathName = usePathname().split('/').pop() || 'Home';
  const [title, setTitle] = useState('');

  useEffect(() => {
    const titles: Record<string, string> = {
      'guest-houses': 'Guest Houses',
      commodities: 'Commodities',
    };
    setTitle(titles[pathName] || '');
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
