const roles = [
  {
    iconName: '/images/roles/admin.svg',
    roleName: 'Administrator',
    userCount: 120,
    listItems: [
      'Manage Users',
      'Configure Settings',
      'Full Access Control',
      'System Audits',
    ],
    borderColor: 'border-t-blue-500',
    bulletColor: 'before:bg-blue-500',
  },
  {
    iconName: '/images/roles/developer.png',
    roleName: 'Developer',
    userCount: 75,
    listItems: [
      'Develop New Features',
      'Bug Fixes',
      'Code Reviews',
      'Unit Testing',
    ],
    borderColor: 'border-t-green-500',
    bulletColor: 'before:bg-green-500',
  },
  {
    iconName: '/images/roles/support.png',
    roleName: 'Support ',
    userCount: 45,
    listItems: [
      'Handle Customer Queries',
      'Issue Resolution',
      'Product Assistance',
      'Customer Follow-ups',
    ],
    borderColor: 'border-t-pink-500',
    bulletColor: 'before:bg-pink-500',
  },
  {
    iconName: '/images/roles/dataentry.svg',
    roleName: 'Data Entry',
    userCount: 30,
    listItems: [
      'Data Entry Tasks',
      'Data Verification',
      'Record Management',
      'Reporting Discrepancies',
    ],
    borderColor: 'border-t-orange-500',
    bulletColor: 'before:bg-orange-500',
  },
];

export default roles;
