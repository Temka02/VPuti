export type HotelFacility =
  | "twentyFourHourFrontDesk"
  | "petsAllowed"
  | "adultsOnly"
  | "bankingServices"
  | "luggageStorage"
  | "covid19Measures"
  | "swimmingPool"
  | "beach"
  | "accessibleEnvironment"
  | "kidsFriendly"
  | "parking"
  | "shuttleService"
  | "soundproofRooms"
  | "conferenceService"
  | "internet"
  | "gym";

export type AccommodationType =
  | "hotels"
  | "apartments"
  | "hostels"
  | "aparthotels"
  | "villasAndBungalows"
  | "sanatoriums"
  | "cottagesAndHouses"
  | "campings"
  | "boutiqueHotels"
  | "miniHotels"
  | "guestHouses"
  | "resorts"
  | "bedAndBreakfast"
  | "glampings"
  | "castles"
  | "farmHouses";

export type HotelMeal =
  | "allInclusive"
  | "halfBoardWithChoice"
  | "breakfastAndLunch"
  | "breakfast"
  | "halfBoard"
  | "fullBoard";

export type HotelRatingFilter = "9" | "8" | "7" | "6" | "5";

export type HotelEntertainment =
  | "bar"
  | "casino"
  | "bicycleRental"
  | "restaurant"
  | "leisure"
  | "beautySalon"
  | "spa";

export type RoomAmenity =
  | "balcony"
  | "clothingAndFootwearCare"
  | "coffeeOrTeaMaker"
  | "internet"
  | "minibar"
  | "safe"
  | "kitchen"
  | "privateBathroom"
  | "airConditioning"
  | "hairdryer"
  | "soundproofing"
  | "tv";

export interface HotelQueryParams {
  city: string;
  arrivalDate: string;
  departureDate: string;
  nights: number;
  guestCount: number;
}

export interface HotelFilters {
  priceRange: [min: number, max: number];
  starCount: number[];
  accomodationType: AccommodationType[];
  facilities: HotelFacility[];
  meal: HotelMeal[];
  rating: HotelRatingFilter[];
  entertainments: HotelEntertainment[];
  amenities: RoomAmenity[];
}
