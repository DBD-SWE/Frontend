import { Input } from '@/components/input';
import Image from 'next/image';

// Define an interface for the component props
interface RoleNameProps {
  defaultRoleName: string;
}

const RoleIcon = (
  <Image
    width={13}
    height={13}
    className="mr-2 object-contain"
    src="/images/users/user-role.png"
    alt="edit"
  />
);
// Use the interface in your function component
export default function RoleName({ defaultRoleName }: RoleNameProps) {
  return (
    <div>
      <div className="pt-12">
        <h1 className="text-sm font-medium">Role Name:</h1>
        <Input
          className="ml-2 mt-2 w-[95%] sm:w-auto sm:max-w-md md:max-w-lg"
          defaultValue={defaultRoleName} // Use the prop for the default value
          input="text-zinc-500"
          size="md"
          startContent={RoleIcon}
        />
      </div>
    </div>
  );
}
