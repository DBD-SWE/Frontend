'use client';
import RoleCard from '@/components/card/rolecard';
import list from '@/components/card/rolecardlist';

export default function Test() {
  return (
    <div className="flex flex-wrap">
      {list.map((role, index) => (
        <div className="p-5">
          <RoleCard
            key={index}
            iconName={role.iconName}
            roleName={role.roleName}
            userCount={role.userCount}
            listItems={role.listItems}
            borderColor={role.borderColor}
            bulletColor={role.bulletColor}
          />
        </div>
      ))}
    </div>
  );
}
