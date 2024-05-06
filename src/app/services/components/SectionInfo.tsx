import React from 'react';

type Props = {
  title: string;
  subtitle: string;
};

const SectionInfo = ({ title, subtitle }: Props) => {
  return (
    <div>
      <p className="mb-1">{title}</p>
      <p className="text-sm text-zinc-500">{subtitle}</p>
    </div>
  );
};

export default SectionInfo;
