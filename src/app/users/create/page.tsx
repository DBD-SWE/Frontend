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
        <div className="border-b-tranparent flex items-center border-t-2 border-l-transparent border-r-transparent border-t-[#F4F4F5] py-10">
          {/* Left Text */}
          <div className="flex flex-col pl-4">
            <h3>Personal Information</h3>
            <p className="mt-0.5 text-sm text-zinc-500">
              Fill in basic information to establish the profile.
            </p>
          </div>
          {/* Right Inputs */}
          <div className="flex flex-wrap">
            <Input size="sm" type="email" label="Email" />
          </div>
        </div>
      </div>
    </div>
  );
}
