'use client';
import React, { useEffect, useState } from 'react';
import Section from '../../components/section';
import { Input, Select, TextArea } from '../../../components/input';
import FileInput from '../../components/file-input';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import Link from 'next/link';
import { getGuestHouse } from '@/lib/actions/guestHouses';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { GuestHouse } from '@/lib/types';

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

const Page = (props: Props) => {
  const accessibility = [
    { label: 'Accessible', value: 'Accessible' },
    { label: 'Non Accessible', value: 'Non Accessible' },
  ];

  const [guestHouseData, setGuestHouseData] = useState<GuestHouse>();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data, message, status } = await getGuestHouse(Number(param.id));
      if (status === 'error') {
        console.log(message);
      } else {
        setGuestHouseData(data);
        console.log(data);
      }
    };
    fetchData();
  }, [param.id]);

  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between"></div>
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
                value={guestHouseData?.name}
                isDisabled
              />
              <TextArea
                label="Description"
                value={guestHouseData?.description}
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
              <div className="flex w-full gap-x-1">
                <Input
                  type="text"
                  label="Logitude"
                  className="w-1/2"
                  value={(guestHouseData as any)?.location_coordinates_long}
                  isDisabled
                />
                <Input
                  type="text"
                  label="Latitude"
                  className="w-1/2"
                  value={(guestHouseData as any)?.location_coordinates_lat}
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
              <Input
                type="number"
                label="Bedrooms"
                value={(guestHouseData as any)?.number_of_bedrooms}
                isDisabled
              />
              <Input
                type="number"
                label="Bathrooms"
                value={(guestHouseData as any)?.number_of_bathrooms}
                isDisabled
              />
              <Input
                type="text"
                label="Category"
                name="category"
                placeholder={(guestHouseData as any)?.category}
                disabled={true}
              />
              <Select
                items={[]}
                placeholder={(guestHouseData as any)?.district.name}
                label="Select"
                name="district"
                isDisabled={true}
              />
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
                  isDisabled={true}
                  items={accessibility}
                  placeholder={
                    (guestHouseData as any)?.accessibility
                      ? 'Accessible'
                      : 'Non Accessible'
                  }
                  label="Select"
                />
              </div>
              <div className="flex items-center gap-5">
                <p className="text-xs">Rating</p>
                <div className="rounded-fill h-[30px] w-[2px] bg-zinc-200"></div>
                <StarRating isDisabled={true} rating={guestHouseData?.rating} />
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
              <FileInput isDisabled={true} />
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

export default Page;
