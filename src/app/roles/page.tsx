import RoleCard from './components/card/rolecard';
import list from './components/card/rolecardlist';
import NewRoleCard from './components/card/newrolecard';
import { PageTitle, SubTitle } from '@/components/text';

export default function Roles() {
  return (
    <>
      {/* Head Section */}
      <div className="flex flex-col">
        <PageTitle>Roles & Permissions</PageTitle>
        <SubTitle content={['List of Roles', '○', 'Permissions for Each']} />
      </div>
      <div className="flex flex-wrap">
        {list.map((role, index) => (
          <div key={index} className="p-5">
            <RoleCard
              key={index}
              iconName={role.iconName}
              roleName={role.roleName}
              userCount={role.userCount}
              listItems={role.listItems}
              color={role.color}
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
