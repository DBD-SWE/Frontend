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
        <h1 className="text-base font-medium">Role Name</h1>
        <Input
          className="ml-4 w-96 pt-2"
          defaultValue={defaultRoleName}  // Use the prop for the default value
          input="text-zinc-500"
        />
      </div>
    </div>
  );
}
