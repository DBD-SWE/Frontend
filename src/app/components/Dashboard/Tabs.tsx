'use client';
import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';

export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="overview" title="Overview" />
        <Tab key="analytics" title="Analytics" />
      </Tabs>
    </div>
  );
}
