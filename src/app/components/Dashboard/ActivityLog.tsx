import { DeleteIcon, EditIcon, AddIcon, MailIcon } from '@/icons';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {};

const ActivityLog = (props: Props) => {
  return (
    <div>
      <div className="relative flex flex-col justify-between rounded-md border border-b-black px-8 py-12 shadow-sm md:px-12">
        <div className="absolute left-[72px] top-12 h-48 w-[1px] bg-zinc-200 max-md:left-[55px] max-md:top-14 max-md:h-44"></div>
        <UserActivityCard
          action="update"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        />
        <div className="mt-12">
          <UserActivityCard
            action="delete"
            actor="Peter Chahid"
            dateTime="17 Jan, 2024 - 10:45"
          />
        </div>
        {/* <UserActivityCard
          action="create"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        /> */}
      </div>
    </div>
  );
};

export default ActivityLog;

type UserProps = {
  action: 'create' | 'update' | 'delete';
  actor: string;
  dateTime?: string;
};

const UserActivityCard = ({ action, actor, dateTime }: UserProps) => {
  return (
    <div className="relative">
      <div className="flex space-x-2 md:space-x-5">
        <Icon type={action} />
        <div className="relative">
          <div className="bg-grey"></div>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-xs sm:text-base md:text-lg">
              A user has been {action}d by
              <span className="ml-1 font-bold italic underline min-w-[91px]">{actor}</span>
            </p>
            <p className="text-xs text-zinc-500 sm:text-sm md:text-base">
              {dateTime}
            </p>
          </div>
          <div className="flex items-center justify-between space-x-1 rounded-md border border-gray-200 px-2 py-2 shadow-sm md:gap-5 md:px-5 md:py-2">
            <p className="text-xs md:text-base">{actor}</p>
            <div className="hidden items-center justify-center space-x-4 rounded-md px-4 py-1 text-xs shadow-sm md:flex md:text-base">
              <div className='min-w-[20px]'>
                <MailIcon />
              </div>
              <p>peter@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-4 rounded-md bg-[#f4f4f5] px-3 py-1 text-xs shadow-sm md:px-4 md:text-base">
              <MailIcon />
              <p>Data Entry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type IconProps = {
  type: 'create' | 'update' | 'delete';
};

const Icon = ({ type }: IconProps) => {
  let icon;
  let color;

  switch (type) {
    case 'update':
      icon = <EditIcon />;
      color = '#CCC62E';
      break;
    case 'delete':
      icon = <DeleteIcon />;
      color = '#A7141C';
      break;
    case 'create':
      icon = <AddIcon />;
      color = '#2ECC71';
      break;
  }

  return (
    <div
      className="full flex h-12 w-12 items-center justify-center rounded-full p-4"
      style={{ backgroundColor: color }}
    >
      <div className="translate-x-[2px]">{icon}</div>
    </div>
  );
};
