'use client';
import DeleteCard from './components/card/deletecard';
import ViewCard from './components/card/viewcard';
import roles from '@/roles/components/card/rolecardlist'; // Make sure the import path is correct
import ViewTable from './components/table/viewtable';
import mockData from './components/table/tablelist';
export default function ViewRoles() {
  const firstRole = roles[0]; // Get the first element from the roles array

  return (
    <>
      <div>
        <div className='pb-8'>
          <ViewCard
            iconName={firstRole.iconName}
            roleName={firstRole.roleName}
            userCount={firstRole.userCount}
            listItems={firstRole.listItems}
            borderColor={firstRole.borderColor}
            bulletColor={firstRole.bulletColor}
          />
        </div>
        <ViewTable data={mockData} />
        <div className=" pt-8 pb-4">
          <DeleteCard roleName={firstRole.roleName} />
        </div>
      </div>
    </>
  );
}
