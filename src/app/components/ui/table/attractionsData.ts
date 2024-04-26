const columns = [
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'RATING', uid: 'rating', sortable: true },
  { name: 'ACCESSIBILITY', uid: 'accessibility', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
];

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' },
];
// 20 entries
const attractions = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  address: `${i + 1} Main St`,
  coordinates: `${i + 1} Main St`,
  description: `This is guest house ${i + 1}`,
  rating: Math.floor(Math.random() * 5) + 1,
  accessibility: Math.random() > 0.5 ? 'Accessible' : 'Not Accessible',
  images: [
    'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  ],
}));

export { columns, attractions, statusOptions };
