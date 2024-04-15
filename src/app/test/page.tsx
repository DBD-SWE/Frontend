'use client';
import RoleCard from '@/components/card/rolecard';
import admin from '../../../public/images/RoleImages/admin.svg';

export default function Test() {
  return (
    <div>
      <RoleCard
        iconName={admin}
        roleName="Administrator"
        userCount={10}
        listItems={[
          'Full User Management',
          'Access Control Lists',
          'Audit Logs',
          'System Settings',
        ]}
        borderColor="border-t-red-500"
        bulletColor="before:bg-red-500"  // Specify the color for bullet points
      />
    </div>
  );
}
