export type GuestHouse = {
  id: number;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  bathrooms: number;
  bedrooms: number;
  rating: number;
  accessibility: string;
  foodType: string;
  electricity: string;
  images: string[];
};

export type GuestHouseColumn = {
  name: string;
  uid: string;
  sortable?: boolean;
};
