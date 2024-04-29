import { Input } from '@/components/input';

export default function RoleName() {
  return (
    <div>
      <div className="pt-12">
        <h1 className="text-base font-medium">Role Name</h1>
        <Input
          className="ml-4 w-96 pt-2"
          defaultValue="Administrator"
          input="text-zinc-500"
        />
      </div>
    </div>
  );
}
