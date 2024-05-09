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

export type TableColumnType = {
  name: string;
  uid: string;
  sortable?: boolean;
};

export type Attraction = {
  id: number;
  name: string;
  address: string;
  images: string[];
};

export type User = {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  ban: string;
  email: string;
};

export type StatusOptions = {
  name: string;
  uid: string;
  color: string;
};

export type BannedOptions = {
  name: string;
  uid: string;
  color: string;
};
