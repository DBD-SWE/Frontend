'use client';

interface RoleHeaderProps {
  items: string[];
}

export default function RoleHeader({ items }: RoleHeaderProps) {
  return (
    <div className="pb-3 pl-5">
      <h1 className="text-3xl font-bold">Roles & Permissions</h1>
      <div>
        <ul className=" flex">
          {items.map((item, index) => (
            <li key={index} className="pr-2 text-xs text-zinc-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
