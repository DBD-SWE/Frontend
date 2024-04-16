import { DeleteIcon, EditIcon, AddIcon, MailIcon } from '@/icons';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {};

const ActivityLog = (props: Props) => {
  return (
    <div>
      <div className="relative mt-12 flex flex-col space-y-12 rounded-md border px-12 pb-16 shadow-md">
        <div className="absolute left-[72px] top-12 h-[350px] w-[1px] bg-[#f4f4f5]"></div>

        <UserActivityCard
          action="update"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        />
        <UserActivityCard
          action="delete"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        />
        <UserActivityCard
          action="create"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        />
      </div>
      <div className="m-auto h-1 w-[99%] rounded-full bg-black"></div>
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
      <div className="flex space-x-5">
        <Icon type={action} />
        <div className="relative">
          <div className="bg-grey"></div>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm sm:text-base md:text-lg">
              A user has been {action}d by
              <span className="ml-1 font-bold italic underline"> {actor}</span>
            </p>
            <p className="text-xs opacity-60 sm:text-sm md:text-base">
              {dateTime}
            </p>
          </div>
          <div className="flex w-[550px] items-center justify-between rounded-md border border-gray-200 px-5 py-2 shadow-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] p-2">
              <p className="text-xs font-bold text-black">PC</p>
            </div>
            <p>{actor}</p>
            <div className="flex items-center justify-center space-x-4 rounded-md px-2 py-1 shadow-sm">
              <MailIcon />
              <p>peter@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-4 rounded-md px-2 py-1 shadow-sm">
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
