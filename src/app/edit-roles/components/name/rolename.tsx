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
        <h1 className="text-sm font-medium">Role Name</h1>
        <Input
          className="ml-2 w-[95%] pt-2 sm:ml-2 sm:w-auto sm:max-w-md md:ml-2 md:max-w-lg"
          defaultValue={defaultRoleName} // Use the prop for the default value
          input="text-zinc-500"
        />
      </div>
    </div>
  );
}
