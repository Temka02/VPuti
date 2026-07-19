export interface HotelReview {
  id: string;
  authorName: string;
  rating: number;
  tripType: "solo" | "couple" | "family" | "business";
  date: string;
  text: string;
}
