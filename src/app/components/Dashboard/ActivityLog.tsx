import { DeleteIcon, EditIcon, AddIcon, MailIcon } from '@/icons';
import React from 'react';
import { cn } from '@/lib/utils';
import DataEntryIcon from '@/icons/dataEntry';
import Image from 'next/image';

type Props = {};

const ActivityLog = (props: Props) => {
  return (
    <div className="w-full">
      <div className="relative flex w-full flex-col justify-between rounded-md border border-b-black px-4 py-6 shadow-sm md:px-12 md:py-12">
        <div className="absolute left-[75px] top-12 w-[1px] bg-zinc-200 max-md:left-[50px] max-md:top-14 max-md:h-32 max-sm:left-[31px] max-sm:h-20 md:h-48"></div>
        <UserActivityCard
          action="update"
          actor="Peter Chahid"
          dateTime="17 Jan, 2024 - 10:45"
        />
        <div className="mt-12 max-sm:mt-8">
          <ServiceActivityCard
            action="delete"
            actor="Peter Chahid"
            dateTime="17 Jan, 2024 - 10:45"
            type="guest house"
            name="Meta House"
            location="Jbeil, Blat"
            rating={3}
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

type ServiceProps = {
  action: 'create' | 'update' | 'delete';
  actor: string;
  dateTime?: string;
  type: string;
  name?: string;
  location: string;
  rating: number;
};

const UserActivityCard = ({ action, actor, dateTime }: UserProps) => {
  return (
    <div className="relative">
      <div className="flex space-x-2 md:space-x-5">
        <Icon type={action} />
        <div className="w-full space-y-5 max-sm:space-y-3">
          <div>
            <p className="text-xs sm:text-base md:text-lg">
              A user has been {action}d by
              <span className="ml-1 min-w-[91px] font-bold italic underline">
                {actor}
              </span>
            </p>
            <p className="text-xs text-zinc-500 sm:text-sm md:text-base">
              {dateTime}
            </p>
          </div>
          <div className="flex items-center justify-between space-x-1 rounded-md border border-gray-200 px-2 py-2 shadow-sm max-sm:py-1 md:gap-5 md:px-5 md:py-2">
            <p className="text-sm">{actor}</p>
            <div className="gap-2 py-2 px-3 max-sm:hidden flex items-center justify-center rounded-md text-xs shadow-sm md:text-base">
              <div className="min-w-[30px]">
                <MailIcon />
              </div>
              <p className='text-sm'>peter@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-4 rounded-md bg-[#f4f4f5] px-3 py-1 text-xs shadow-sm md:px-4 md:text-base">
              <MailIcon />
              <p className="text-sm">Data Entry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceActivityCard = ({
  action,
  actor,
  dateTime,
  type,
  name,
  location,
  rating,
}: ServiceProps) => {
  return (
    <div className="relative">
      <div className="flex space-x-2 md:space-x-5">
        <Icon type={action} />
        <div className="w-full space-y-5 max-sm:space-y-3">
          <div>
            <p className="text-xs sm:text-base md:text-lg">
              A {type} has been {action}d by
              <span className="ml-1 min-w-[91px] font-bold italic underline">
                {actor}
              </span>
            </p>
            <p className="text-xs text-zinc-500 sm:text-sm md:text-base">
              {dateTime}
            </p>
          </div>
          <div className="flex items-center justify-between space-x-1 rounded-md border border-gray-200 px-2 py-2 shadow-sm max-sm:py-1 md:gap-5 md:px-5 md:py-2">
            <p className="text-sm">{name}</p>
            <div className="flex items-center justify-center gap-2 rounded-md bg-[#f4f4f5] px-3 py-1 text-xs shadow-sm md:px-4 md:text-base">
              <Image
                alt="location"
                src="/icons/locationBlack.png"
                width={20}
                height={20}
              />
              <p className="text-sm">{ location}</p>
            </div>
            <div className="max-sm:hidden flex items-center justify-center space-x-4 rounded-md px-3 py-1 text-xs md:px-4 md:text-base">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    alt="star"
                    src={
                      i < rating ? '/icons/star.png' : '/icons/emptyStar.png'
                    }
                    width={10}
                    height={10}
                  />
                ))}
              </div>
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
      className="full flex h-14 w-14 items-center justify-center rounded-full max-sm:h-8 max-sm:w-8 max-sm:p-2 md:p-4"
      style={{ backgroundColor: color }}
    >
      <div className="relative translate-x-[2px]">{icon}</div>
    </div>
  );
};
