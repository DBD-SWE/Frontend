import { PageTitle, SubTitle } from '@/components/text';
import React from 'react';
import Section from '../../components/section';
import { Input, Select, TextArea } from '@/components/input';
import FileInput from '../../components/file-input';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import Link from 'next/link';

const DeleteIcon = (
  <Image
    className="object-contain"
    src="/images/general/delete.png"
    alt="delete"
    width={17}
    height={17}
  />
);

const EditIcon = (
  <Image src="/icons/editWhite.png" width={17} height={17} alt="Edit User" />
);

type Props = {};

const page = (props: Props) => {
  const accessibility = [
    { label: 'Accessible', value: 'Accessible' },
    { label: 'Non Accessible', value: 'Non Accessible' },
  ];
  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        {/* Title and Subtitle */}
        <div className="flex flex-col">
          <PageTitle>Guest Houses</PageTitle>
          <SubTitle
            content={[
              'Services',
              '○',
              'Guest Houses',
              '○',
              '{Guesthouse_Name}',
            ]}
          />
        </div>
      </div>
      <div className="my-12 w-full">
        {/* General info - Name, Description */}
        <Section
          title="General Information"
          description="Fill in basic information to create the guest house."
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input
                type="text"
                label="Name"
                value="{Guesthouse_name}"
                isDisabled
              />
              <TextArea
                label="Description"
                value="{Guesthouse_desc}"
                isDisabled
              />
            </div>
          }
        />

        {/* Location info - Address, Long and Lat */}
        <Section
          title="Location Information"
          description="This information is related to the location of the service on google maps"
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input
                type="text"
                label="Address"
                value="{Guesthouse Address}"
                isDisabled
              />
              <div className="flex w-full gap-x-1">
                <Input
                  type="text"
                  label="Logitude"
                  className="w-1/2"
                  value="{Guesthouse Long}"
                  isDisabled
                />
                <Input
                  type="text"
                  label="Latitude"
                  className="w-1/2"
                  value="{Guesthouse Lat}"
                  isDisabled
                />
              </div>
            </div>
          }
        />

        {/* Service Stats - N of Bathrooms and Bedrooms */}
        <Section
          title="Service Statistics"
          description="Fill in the basic statistics useful for the users."
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="number" label="Bedrooms" value={5} isDisabled />
              <Input type="number" label="Bathrooms" value={6} isDisabled />
            </div>
          }
        />

        {/* Extra Information - Accessbility and rating */}
        <Section
          title="Extra Information"
          description="Extra information that would improve user experience."
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 gap-5 max-xl:flex-col max-md:mt-7">
              <div className="max-w-[350px] sm:w-[350px]">
                <Select
                  isDisabled
                  items={accessibility}
                  placeholder="Accessibility"
                  label="Select"
                />
              </div>
              <div className="flex items-center gap-5">
                <p className="text-xs">Rating</p>
                <div className="rounded-fill h-[30px] w-[2px] bg-zinc-200"></div>
                <StarRating isDisabled rating={3} />
              </div>
            </div>
          }
        />

        {/* Photo Upload */}
        <Section
          title="Photo Information"
          description="Photos of the guest house"
          last
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 max-md:justify-center lg:max-w-[340px]">
              {/* <FileInput /> */}
            </div>
          }
        />

        {/* Buttons */}
        <div className="mt-10 flex gap-3 max-[475px]:flex-col">
          <Link href={`/services/guest-houses/${1}/edit`}>
            <Button
              className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
              endContent={EditIcon}
              size="md"
            >
              Edit Guest House
            </Button>
          </Link>
          <Link href={`/services/guest-houses`}>
            <Button
              size="md"
              endContent={DeleteIcon}
              className="rounded border border-black bg-white px-6 text-sm max-sm:px-4"
            >
              Delete
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
