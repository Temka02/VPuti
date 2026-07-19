import type { Ticket } from "../../entities/flights/Ticket";

export const MOCK_TICKETS: Ticket[] = [
  {
    id: "ticket-catalog-1",
    totalPrice: 8500,
    legs: [
      {
        id: "leg-direct-outbound",
        departureCity: "Москва",
        arrivalCity: "Санкт-Петербург",
        date: "2026-08-10",
        hasBaggage: false,
        segments: [
          {
            operatingCarrier: "S7",
            flightNumber: "S7-1025",
            departureAirport: "DME",
            departureCity: "Москва",
            departureTime: "2026-08-10T10:15:00Z",
            arrivalAirport: "LED",
            arrivalCity: "Санкт-Петербург",
            arrivalTime: "2026-08-10T11:45:00Z",
            duration: 90,
          },
        ],
      },
    ],
  },
  {
    id: "ticket-catalog-2",
    totalPrice: 16200,
    legs: [
      {
        id: "leg-round-out",
        departureCity: "Москва",
        arrivalCity: "Сочи",
        date: "2026-08-15",
        hasBaggage: true,
        segments: [
          {
            operatingCarrier: "SU",
            flightNumber: "SU-1124",
            departureAirport: "SVO",
            departureCity: "Москва",
            departureTime: "2026-08-15T14:20:00Z",
            arrivalAirport: "AER",
            arrivalCity: "Сочи",
            arrivalTime: "2026-08-15T18:00:00Z",
            duration: 220,
          },
        ],
      },
      {
        id: "leg-round-ret",
        departureCity: "Сочи",
        arrivalCity: "Москва",
        date: "2026-08-22",
        hasBaggage: true,
        segments: [
          {
            operatingCarrier: "SU",
            flightNumber: "SU-1125",
            departureAirport: "AER",
            departureCity: "Сочи",
            departureTime: "2026-08-22T20:00:00Z",
            arrivalAirport: "SVO",
            arrivalCity: "Москва",
            arrivalTime: "2026-08-22T23:40:00Z",
            duration: 220,
          },
        ],
      },
    ],
  },
];
