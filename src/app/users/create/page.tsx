import { PageTitle, SubTitle } from '@/components/text';
import { Input, Select } from '@/components/input';
import roles from './roles';
import { Section, FileInput } from './components';

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
        <Section
          title="Personal Information"
          description="Fill in basic information to establish the profile"
          form={
            <div className="grid w-[100%] max-w-[700px] flex-1 grid-cols-1 grid-rows-4 gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="text" label="First Name" />
              <Input type="text" label="Last Name" />
              <Input type="email" label="Email" />
              <Input type="tel" name="phone" label="Phone Number" />
            </div>
          }
        />

        {/* Software Information */}
        <Section
          title="Software Information"
          description="This information is related directly to this software"
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 lg:max-w-[340px]">
              <Select items={roles} placeholder="User role" label="Role" />
            </div>
          }
        />

        {/* Photo Information */}
        <Section
          title="Photo Information"
          description="Upload a photo for the user"
          last
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 lg:max-w-[340px]">
              <FileInput />
            </div>
          }
        />
      </div>
    </div>
  );
}
