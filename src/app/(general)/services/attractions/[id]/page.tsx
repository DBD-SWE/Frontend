import React from 'react';
import Section from '@/(general)/services/components/section';
import FileInput from '../../components/file-input';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import Link from 'next/link';
import { Input, Select, TextArea } from '@/(general)/components/input';

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
      <div className="my-12 w-full">
        {/* General info - Name, Description */}
        <Section
          title="General Information"
          description="Fill in basic information to create the attraction."
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

        {/* Photo Upload */}
        <Section
          title="Photo Information"
          description="Photos of the attraction"
          last
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 max-md:justify-center lg:max-w-[340px]">
              {/* <FileInput /> */}
            </div>
          }
        />

        {/* Buttons */}
        <div className="mt-10 flex gap-3 max-[475px]:flex-col">
          <Link
            href={`/services/attractions/${1}/edit`} // TODO: Add href
          >
            <Button
              className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
              endContent={EditIcon}
              size="md"
            >
              Edit Attraction
            </Button>
          </Link>
          <Link
            href={`/services/attractions`} // TODO: Add href
          >
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
