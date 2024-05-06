import { RoleCard, NewRoleCard } from './components/card/index';
import list from './components/card/rolecardlist';
import { PageTitle, SubTitle } from '@/(general)/components/text';

export default function Roles() {
  return (
    <>
      {/* Head Section */}
      <div className="flex flex-col">
        <PageTitle>Roles & Permissions</PageTitle>
        <SubTitle content={['List of Roles', '○', 'Permissions for Each']} />
      </div>
      <div className="grid auto-cols-max grid-flow-row grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 py-10">
        {list.map((role, index) => (
          <div key={index} className="w-full">
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
        <NewRoleCard />
        <div />
      </div>
    </>
  );
}
