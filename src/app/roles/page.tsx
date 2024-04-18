'use client';
import RoleCard from '@/roles/components/card/rolecard';
import list from '@/roles/components/card/rolecardlist';
import NewRoleCard from '@/roles/components/card/newrolecard';
import RoleHeader from '@/roles/components/card/roleheader';
export default function Roles() {
  const HeaderContent = ['List of Roles', '○', 'Permissions for Each'];
  return (
    <>
      <RoleHeader items={HeaderContent} />
      <div className="flex flex-wrap ">
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
        <div className="p-5">
          <NewRoleCard />
        </div>
        <div />
      </div>
    </>
  );
}