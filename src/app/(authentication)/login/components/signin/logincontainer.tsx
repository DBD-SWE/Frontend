'use client';
import { Input } from '@/(general)/components/input';
import Image from 'next/image';
import React from 'react';
export default function LoginContainer() {
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
    <div className="h-4/5 w-2/5 rounded-lg px-14 shadow">
      {/* Heading  */}
      <div className="w-full text-center">
        <h1 className="pb-2 pt-12 text-[15px] font-bold">Sign In</h1>
        <p className="text-[10px] font-light text-zinc-500">
          Enter your credentials to access your account.
        </p>
        <div className="mt-8 h-[1px] bg-zinc-300" />
      </div>
      {/* Inputs */}
      <div className="mt-10 w-full">
        <div className="">
          <Input
            className="w-full self-center"
            label="Email Address"
            labelPlacement="outside"
            placeholder=" "
            variant="bordered"
            classNames={{ inputWrapper: 'bg-white' }}
            startContent={Mail}
          />

          <Input
            className="w-full self-center"
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
        </div>
      </div>
    </div>
  );
}
