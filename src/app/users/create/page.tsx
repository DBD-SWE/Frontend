import { PageTitle, SubTitle } from '@/components/text';
import Input from '../components/input';

export default function CreateUser() {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users', '○', 'Create New User']} />
        </div>
      </div>
      {/* Body Section */}
      <div className="my-12 w-full">
        {/* Personal Information */}
        <div className="flex items-center justify-start border-b-[1px] border-t-[1px] border-b-[#F4F4F5] border-l-transparent border-r-transparent border-t-[#F4F4F5] px-4 py-14">
          {/* Left Text */}
          <div className="flex w-max flex-col">
            <h3>Personal Information</h3>
            <p className="mt-0.5 w-max text-sm text-zinc-500">
              Fill in basic information to establish the profile.
            </p>
          </div>
          {/* Right Inputs */}
          <div className="ml-32 grid w-[100%] max-w-[700px] grid-cols-2 grid-rows-2 gap-x-5 gap-y-4 max-lg:ml-6 max-lg:grid-cols-1 max-md:grid-rows-4">
            <Input type="text" label="First Name" />
            <Input type="text" label="Last Name" />
            <Input type="email" label="Email" />
            <Input type="tel" name="phone" label="Phone Number" />
          </div>
        </div>
      </div>
    </div>
  );
}
