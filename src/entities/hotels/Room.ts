import type { RoomAmenity } from "./filters/HotelFilters";

export type BedType = "single" | "double" | "mix";

export interface Room {
  id: string;
  title: string;
  bedType: BedType;
  capacity: number;
  roomAmenities: RoomAmenity[];
  pricePerNight: number;
  hasFreeCancellation: boolean;
}
