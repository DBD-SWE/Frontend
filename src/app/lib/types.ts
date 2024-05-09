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
