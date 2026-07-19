export interface FlightSegment {
  operatingCarrier: string;
  flightNumber: string;

  departureAirport: string;
  departureCity: string;
  departureTime: string;

  arrivalAirport: string;
  arrivalCity: string;
  arrivalTime: string;

  duration: number;
}

export interface FlightLeg {
  id: string;
  departureCity: string;
  arrivalCity: string;
  date: string;

  segments: FlightSegment[];

  hasBaggage: boolean;
}

export interface Ticket {
  id: string;
  totalPrice: number;

  legs: FlightLeg[];
}
