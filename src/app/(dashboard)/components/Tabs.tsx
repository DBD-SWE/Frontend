'use client';
import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';

export default function TabsComponent() {
  return (
    <div className="mt-3.5 flex w-full flex-col">
      <Tabs
        classNames={{
          tabList: 'rounded p-1 h-[35px]',
          cursor: 'rounded ',
          tabContent: 'text-xs ',
          tab: 'h-[25px]',
        }}
        aria-label="Options"
        disabledKeys={['analytics']}
      >
        <Tab key="overview" title="Overview" />
        <Tab key="analytics" title="Analytics" />
      </Tabs>
    </div>
  );
}
