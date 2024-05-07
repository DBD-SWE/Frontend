import React from 'react';
import Image from 'next/image';

type Props = {};

const ActivityLog = (props: Props) => {
  return (
    <div className="w-full">
      <div className="relative flex w-full flex-col justify-between rounded border-b-2 border-b-black px-4 py-6 shadow-sm md:px-4 md:py-[60px] md:pt-10 md:shadow-sm">
        <div className="absolute left-[35px] top-24 w-[1px] bg-zinc-200 max-md:left-[35px] max-md:top-22 max-md:h-32 max-sm:left-[31px] max-sm:h-28 md:h-40"></div>
        <p className="text-xl font-semibold max-sm:text-lg mb-4">Recent Activity</p>

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
      <div className="flex space-x-2">
        <Icon type={action} />
        <div className="w-full space-y-5 max-sm:space-y-3">
          <div>
            <p className="text-sm">
              A user has been {action}d by
              <span className="ml-1 min-w-[91px] font-bold italic underline">
                {actor}
              </span>
            </p>
            <p className="text-xs text-zinc-500">
              {dateTime}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-md border border-gray-200 px-2 py-2 shadow-sm max-sm:py-1 md:gap-3 md:px-5 md:py-2">
            <p className="text-xs">{actor}</p>
            <div className="flex items-center justify-center rounded-md px-3 py-1 text-xs shadow-sm max-sm:hidden md:text-base">
              <div className="min-w-[25px]">
                <Image
                  src="/icons/mail.png"
                  alt="Delete"
                  width={10}
                  height={10}
                  className="h-4 w-4"
                />
              </div>
              <p className="text-xs">peter@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-md bg-[#f4f4f5] px-3 py-1 text-xs shadow-sm md:px-4 md:text-base">
              <Image
                src="/icons/mail.png"
                alt="Delete"
                width={10}
                height={10}
                className="h-4 w-4"
              />
              <p className="text-xs">Data Entry</p>
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
      <div className="flex space-x-2">
        <Icon type={action} />
        <div className="w-full space-y-5 max-sm:space-y-3">
          <div>
            <p className="text-sm">
              A {type} has been {action}d by
              <span className="ml-1 min-w-[91px] font-bold italic underline">
                {actor}
              </span>
            </p>
            <p className="text-xs text-zinc-500">
              {dateTime}
            </p>
          </div>
          <div className="flex items-center justify-between space-x-1 rounded-md border border-gray-200 px-2 py-2 shadow-sm max-sm:py-1 md:gap-5 md:px-5 md:py-2">
            <p className="text-xs">{name}</p>
            <div className="flex items-center justify-center gap-2 rounded-md bg-[#f4f4f5] px-3 py-1 text-xs shadow-sm md:px-4 md:text-base">
              <Image
                alt="location"
                src="/icons/locationBlack.png"
                width={15}
                height={15}
              />
              <p className="text-xs">{location}</p>
            </div>
            <div className="flex items-center justify-center space-x-4 rounded-md px-3 py-1 text-xs max-sm:hidden md:px-4 md:text-base">
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
      icon = (
        <Image src="/icons/edit.png" alt="Delete" width={15} height={15} />
      );
      color = '#CCC62E';
      break;
    case 'delete':
      icon = (
        <Image src="/icons/delete.png" alt="Delete" width={15} height={15} />
      );
      color = '#A7141C';
      break;
    case 'create':
      icon = (
        <Image src="/icons/edit.png" alt="Delete" width={15} height={15} />
      );
      color = '#2ECC71';
      break;
  }

  return (
    <div
      className="full flex h-10 w-10 items-center justify-center rounded-full max-sm:h-8 max-sm:w-8 p-2"
      style={{ backgroundColor: color }}
    >
      <div className="relative translate-x-[2px]">{icon}</div>
    </div>
  );
};
