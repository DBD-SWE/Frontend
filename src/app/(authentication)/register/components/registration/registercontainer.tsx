'use client';
import { Input } from '@/(general)/components/input';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
export default function RegisterContainer() {
  const Mail = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/mail.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="mail"
      />
    </div>
  );
  const View = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/view.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="view"
      />
    </div>
  );
  const Hide = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/hide.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="hide"
      />
    </div>
  );
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className=" flex h-[600px] w-[500px] flex-col justify-between rounded-lg bg-white px-14 shadow max-sm:h-screen max-sm:w-screen max-sm:justify-center max-sm:px-8">
      {/* Heading  */}
      <div>
        {/* Top Heading */}
        <div>
          <div className="flex items-center pt-3">
            <h1 className="pr-2 font-bold ">Welcome to </h1>
            <Image
              src={'/images/signingpage/navgateheader.png'}
              height={60}
              width={80}
              alt="navgate"
            />
          </div>
          <p className="text-[10px] font-light text-zinc-500">
            You've been invited to create an account with us. Let's get started
            by setting up your login details.
          </p>
        </div>
        <div className="flex w-full items-center justify-center pt-8">
          <div className="h-[1px] flex-grow bg-zinc-300" />

          <h1 className="px-2 text-[15px] font-bold">Registration</h1>

          <div className="h-[1px] flex-grow bg-zinc-300" />
        </div>
        {/* Inputs */}
        <div className="mt-10 w-full">
          <div className="pb-6 pt-12">
            <Input
              className="w-full self-center"
              label="Email Address"
              labelPlacement="outside"
              placeholder=" "
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              startContent={Mail}
            />
          </div>
          <div>
            <Input
              className="w-full self-center "
              label="Password"
              labelPlacement="outside"
              placeholder=" "
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              startContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? Hide : View}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />
            {/* Forgot password link */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-xs font-medium italic text-zinc-500 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Button  */}
        <div className="flex justify-center pb-20">
          <Button
            color="primary"
            className="flex-end h-10 w-full rounded px-11 text-sm"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
