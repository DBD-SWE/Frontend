'use client';
import dataentry from '../../../../public/images/RoleImages/dataentry.svg';
import developer from '../../../../public/images/RoleImages/developer.svg';
import support from '../../../../public/images/RoleImages/support.svg';
import admin from '../../../../public/images/RoleImages/admin.svg';

const roles = [
    {
      iconName: admin,
      roleName: "Administrator",
      userCount: 120,
      listItems: [
        "Manage Users",
        "Configure Settings",
        "Full Access Control",
        "System Audits"
      ],
      borderColor: "border-t-blue-500",
      bulletColor: "before:bg-blue-500"
    },
    {
      iconName: developer,
      roleName: "Developer",
      userCount: 75,
      listItems: [
        "Develop New Features",
        "Bug Fixes",
        "Code Reviews",
        "Unit Testing"
      ],
      borderColor: "border-t-green-500",
      bulletColor: "before:bg-green-500"
    },
    {
      iconName: support,
      roleName: "Support ",
      userCount: 45,
      listItems: [
        "Handle Customer Queries",
        "Issue Resolution",
        "Product Assistance",
        "Customer Follow-ups"
      ],
      borderColor: "border-t-pink-500",
      bulletColor: "before:bg-pink-500"
    },
    {
      iconName: dataentry,
      roleName: "Data Entry",
      userCount: 30,
      listItems: [
        "Data Entry Tasks",
        "Data Verification",
        "Record Management",
        "Reporting Discrepancies"
      ],
      borderColor: "border-t-orange-500",
      bulletColor: "before:bg-orange-500"
    }
  ];
  
  export default roles;