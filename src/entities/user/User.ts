import type { Ticket } from "../flights/Ticket";
import type { Hotel } from "../hotels/Hotel";
import type { Room } from "../hotels/Room";

export interface User {
  id: string;
  name: string;
  surname: string;
}

export interface TicketOrder {
  orderId: string;
  bookingNumber: string;
  status: "confirmed" | "cancelled";
  createdAt: string;
  ticketData: Ticket;
}

export interface HotelOrder {
  orderId: string;
  bookingNumber: string;
  status: "confirmed" | "cancelled";
  createdAt: string;
  hotelData: Hotel;
  roomData: Room;
  arrivalDate: string;
  departureDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  ticketHistory: TicketOrder[];
  hotelBookingHistory: HotelOrder[];
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  birthDate: string;
}
