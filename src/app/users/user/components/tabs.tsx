'use client';
import { useState } from 'react';
import { Tabs, Tab } from '@nextui-org/react';

export default function Selection() {
  const [selected, setSelected] = useState('photos');

  return (
    <div className="-ml-4 flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        variant="underlined"
        classNames={{
          cursor: 'w-[50%] rounded shadow-none',
          tabContent: 'text-zinc-600 font-semibold',
        }}
      >
        <Tab key="profile" title="Profile" />
        <Tab key="activity-logs" title="Activity Logs" />
        <Tab key="actions" title="Actions" />
      </Tabs>
    </div>
  );
}
