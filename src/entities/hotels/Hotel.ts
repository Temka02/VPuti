import type {
  HotelEntertainment,
  HotelFacility,
  HotelMeal,
} from "./filters/HotelFilters";
import type { Room } from "./Room";

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  coordinates: { lat: number; lng: number };
  address: string;
  amenities: {
    base: HotelFacility[];
    meals: HotelMeal[];
    entertainment: HotelEntertainment[];
    languages: string[];
    forChildren: boolean;
    business: boolean;
  };
  checkInTime: string;
  checkOutTime: string;
  rooms: Room[];
}
