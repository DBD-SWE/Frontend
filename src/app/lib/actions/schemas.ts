import { z } from 'zod';

export const guestHouseSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  address: z.string().min(1),
  location_coordinates_lat: z.string().min(1),
  location_coordinates_long: z.string().min(1),
  number_of_bathrooms: z.number().nonnegative(),
  number_of_bedrooms: z.number().nonnegative(),
  rating: z.number().nonnegative(),
  accessibility: z.string().min(1),
  images: z.array(z.string()).optional(),
  district: z.string().min(1),
  category: z.string().min(1),
});
