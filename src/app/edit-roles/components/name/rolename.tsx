import { Input } from '@/components/input';

// Define an interface for the component props
interface RoleNameProps {
  defaultRoleName: string;
}

// Use the interface in your function component
export default function RoleName({ defaultRoleName }: RoleNameProps) {
  return (
    <div>
      <div className="pt-12">
        <h1 className="text-base font-medium sm:text-lg md:text-xl">
          Role Name
        </h1>
        <Input
          className="ml-4 w-[95%] pt-2 sm:ml-6 sm:w-auto sm:max-w-md md:ml-8 md:max-w-lg"
          defaultValue={defaultRoleName} // Use the prop for the default value
          input="text-zinc-500"
        />
      </div>
    </div>
  );
}
