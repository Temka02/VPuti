import type { UserProfile } from "../../entities/user/User";
import { MOCK_HOTELS } from "./mockHotels";

export const MOCK_USER_PROFILE: UserProfile = {
  id: "user-artem-123",
  name: "Артем",
  surname: "Иванов",
  email: "artyom.dev@example.com",
  phoneNumber: "+7 (999) 123-45-67",
  birthDate: "2002-05-15",

  hotelBookingHistory: [
    {
      orderId: "order-h-1",
      bookingNumber: "HTL-9843-AX",
      status: "confirmed",
      createdAt: "2026-07-01T12:00:00Z",
      hotelData: MOCK_HOTELS[0],
      roomData: MOCK_HOTELS[0].rooms[0],
      arrivalDate: "2026-08-15",
      departureDate: "2026-08-22",
    },
    {
      orderId: "order-h-2",
      bookingNumber: "HTL-1102-OP",
      status: "confirmed",
      createdAt: "2026-04-10T15:30:00Z",
      hotelData: MOCK_HOTELS[1],
      roomData: MOCK_HOTELS[1].rooms[0],
      arrivalDate: "2026-05-01",
      departureDate: "2026-05-05",
    },
    {
      orderId: "order-h-3",
      bookingNumber: "HTL-6654-TR",
      status: "cancelled",
      createdAt: "2026-06-18T09:15:00Z",
      hotelData: MOCK_HOTELS[2],
      roomData: MOCK_HOTELS[2].rooms[0],
      arrivalDate: "2026-07-10",
      departureDate: "2026-07-15",
    },
  ],

  ticketHistory: [
    {
      orderId: "order-t-1",
      bookingNumber: "PNR-XYZ789",
      status: "confirmed",
      createdAt: "2026-07-02T10:00:00Z",
      ticketData: {
        id: "ticket-future-1",
        totalPrice: 14500,
        legs: [
          {
            id: "leg-future-outbound",
            departureCity: "Москва",
            arrivalCity: "Сочи",
            date: "2026-08-12",
            hasBaggage: true,
            segments: [
              {
                operatingCarrier: "SU",
                flightNumber: "SU-1122",
                departureAirport: "SVO",
                departureCity: "Москва",
                departureTime: "2026-08-12T08:30:00Z",
                arrivalAirport: "AER",
                arrivalCity: "Сочи",
                arrivalTime: "2026-08-12T12:00:00Z",
                duration: 210,
              },
            ],
          },
          {
            id: "leg-future-return",
            departureCity: "Сочи",
            arrivalCity: "Москва",
            date: "2026-08-19",
            hasBaggage: true,
            segments: [
              {
                operatingCarrier: "SU",
                flightNumber: "SU-1123",
                departureAirport: "AER",
                departureCity: "Сочи",
                departureTime: "2026-08-19T18:00:00Z",
                arrivalAirport: "SVO",
                arrivalCity: "Москва",
                arrivalTime: "2026-08-19T21:30:00Z",
                duration: 210,
              },
            ],
          },
        ],
      },
    },
    {
      orderId: "order-t-2",
      bookingNumber: "PNR-OLD112",
      status: "confirmed",
      createdAt: "2026-04-12T08:20:00Z",
      ticketData: {
        id: "ticket-past-1",
        totalPrice: 8400,
        legs: [
          {
            id: "leg-past-outbound",
            departureCity: "Москва",
            arrivalCity: "Санкт-Петербург",
            date: "2026-05-10",
            hasBaggage: false,
            segments: [
              {
                operatingCarrier: "S7",
                flightNumber: "S7-1024",
                departureAirport: "DME",
                departureCity: "Москва",
                departureTime: "2026-05-10T10:15:00Z",
                arrivalAirport: "LED",
                arrivalCity: "Санкт-Петербург",
                arrivalTime: "2026-05-10T11:45:00Z",
                duration: 90,
              },
            ],
          },
        ],
      },
    },
  ],
};
