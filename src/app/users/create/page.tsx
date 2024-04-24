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
        <div className="flex items-center justify-between border-b-[1px] border-t-[1px] border-b-[#F4F4F5] border-l-transparent border-r-transparent border-t-[#F4F4F5] px-4 py-14 max-md:flex-col max-md:items-start max-md:px-2 max-md:py-5">
          {/* Left Text */}
          <div className="flex flex-col">
            <h3>Personal Information</h3>
            <p className="mt-0.5 text-wrap text-sm text-zinc-500">
              Fill in basic information to establish the profile.
            </p>
          </div>
          {/* Right Inputs */}
          <div className="ml-0 grid w-[100%] max-w-[700px] flex-1 grid-cols-1 grid-rows-4 gap-x-5 gap-y-4 max-md:mt-7 md:ml-6 lg:ml-32 lg:grid-cols-2 lg:grid-rows-2">
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
