'use client';
import React, { useState, useEffect } from 'react';
import { PageTitle, SubTitle } from '@/components/text';

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle>{title}</PageTitle>
      <SubTitle content={['Services', title]} />
    </div>
  );
};

export default Title;
