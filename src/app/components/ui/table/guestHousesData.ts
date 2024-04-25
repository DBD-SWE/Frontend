const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'COORDINATES', uid: 'coordinates', sortable: true },
  { name: 'DESCRIPTION', uid: 'description', sortable: true },
  { name: 'BATHROOMS', uid: 'bathrooms', sortable: true },
  { name: 'BEDROOMS', uid: 'bedrooms', sortable: true },
  { name: 'RATING', uid: 'rating', sortable: true },
  { name: 'ACCESSIBILITY', uid: 'accessibility', sortable: true },
  { name: 'FOOD TYPE', uid: 'foodType', sortable: true },
  { name: 'ELECTRICITY', uid: 'electricity', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
];

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Paused', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' },
];
// 20 entries
const guestHouses = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  address: `${i + 1} Main St`,
  coordinates: `${i + 1} Main St`,
  description: `This is guest house ${i + 1}`,
  bathrooms: Math.floor(Math.random() * 5) + 1,
  bedrooms: Math.floor(Math.random() * 5) + 1,
  rating: Math.floor(Math.random() * 5) + 1,
  accessibility: Math.random() > 0.5 ? 'Accessible' : 'Not Accessible',
  foodType: ['Vegan', 'Vegetarian', 'Non-Vegetarian'][
    Math.floor(Math.random() * 3)
  ],
  electricity: Math.random() > 0.5 ? 'Solar' : 'Non-Solar',
  images: [
    'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  ],
}));

export { columns, guestHouses, statusOptions };
