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

export type ActivityLog = {
  id: number;
  name: string;
  action: string;
  ip_address: string;
  status: string;
  time: string;
};

export type CreateGuestHouseFormData = {
  name: string;
  description: string;
  address: string;
  location_coordinates_lat: string;
  location_coordinates_long: string;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  rating: number;
  accessibility: string;
  images?: string[];
};
