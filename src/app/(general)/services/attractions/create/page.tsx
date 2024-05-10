'use client';
import React, { useEffect, useState } from 'react';
import Section from '@/(general)/services/components/section';
import FileInput from '@/(general)/services/components/file-input';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import { Input, Select, TextArea } from '@/(general)/components/input';
import { useFormStatus } from 'react-dom';
import { getAllDistricts } from '@/lib/actions/districts';
import { attractionSchema } from '@/lib/actions/schemas';
import { createAttraction } from '@/lib/actions/attractions';
import { ZodError } from 'zod';
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

type Props = {};

const Page = (props: Props) => {
  const accessibility = [
    { label: 'Accessible', value: 'Accessible' },
    { label: 'Non Accessible', value: 'Non Accessible' },
  ];

  const { pending } = useFormStatus();

  const [districts, setDistricts] = useState([]);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    const getDistricts = async () => {
      const { message, data, status } = await getAllDistricts();
      if (status === 'ok') {
        setDistricts(
          data?.districts.map((district: any) => {
            return {
              label: district.name,
              value: district.id,
            };
          }),
        );
      } else {
        setPageError(message as string);
      }
    };
    getDistricts();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location_coordinates_lat: '',
    location_coordinates_long: '',
    images: [],
    district: null,
  });

  const [zodErrors, setZodErrors] = useState({
    name: '',
    description: '',
    location_coordinates_lat: '',
    location_coordinates_long: '',
    district: '',
  });

  const handleSubmit = async () => {
    try {
      const validatedData = attractionSchema.parse(formData);
      await createAttraction(validatedData);
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          setZodErrors((prev) => ({
            ...prev,
            [err.path[0]]: err.message,
          }));
        });
      }
    }
  };

  const onChange = (e: any) => {
    setZodErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!!pageError) {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{pageError}</p>
        <Link href="/services/attractions/create">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex w-full flex-col">
      {/* Input Sections */}
      <div className="my-12 w-full">
        {/* General Info - Name and description */}
        <Section
          title="General Information"
          description="Fill in basic information to create the attraction."
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input
                type="text"
                label="Name"
                name="name"
                disabled={pending}
                onChange={onChange}
                isInvalid={!!zodErrors.name}
                errorMessage={zodErrors.name}
              />
              <TextArea
                label="Description"
                name="description"
                disabled={pending}
                onChange={onChange}
                isInvalid={!!zodErrors.description}
                errorMessage={zodErrors.description}
              />
            </div>
          }
        />

        {/* Location Info (address, long and lat) */}
        <Section
          title="Location Information"
          description="This information is related to the location of the service on google maps"
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Select
                items={districts}
                placeholder="district"
                label="Select"
                name="district"
                isDisabled={pending}
                onChange={onChange}
                isInvalid={!!zodErrors.district}
                errorMessage={zodErrors.district}
              />
              <div className="flex w-full gap-x-1">
                <Input
                  type="text"
                  name="location_coordinates_lat"
                  onChange={onChange}
                  className="w-1/2"
                  label="logitude"
                  disabled={pending}
                  isInvalid={!!zodErrors.location_coordinates_lat}
                  errorMessage={zodErrors.location_coordinates_lat}
                />
                <Input
                  type="text"
                  name="location_coordinates_long"
                  onChange={onChange}
                  className="w-1/2"
                  label="latitude"
                  disabled={pending}
                  isInvalid={!!zodErrors.location_coordinates_long}
                  errorMessage={zodErrors.location_coordinates_long}
                />
              </div>
            </div>
          }
        />

        {/* Photo Upload */}
        <Section
          title="Photo Information"
          description="Upload a photo for the user"
          last
          form={
            <div className="flex">
              <FileInput isDisabled={pending} onChange={onChange} />
            </div>
          }
        />

        {/* Buttons */}
        <div className="mt-10 flex gap-3 max-[475px]:flex-col">
          <Button
            className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
            endContent={<PlusIcon />}
            size="md"
            type="submit"
            disabled={pending}
          >
            Create Attraction
          </Button>
          <Button
            size="md"
            endContent={DeleteIcon}
            type="reset"
            disabled={pending}
            className="rounded border border-black bg-white px-6 text-sm max-sm:px-4"
          >
            Discard
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Page;
