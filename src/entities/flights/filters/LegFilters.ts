export type BaggageFilter = "all" | "withBaggage" | "noBaggage";

export interface LegFilters {
  stops: number[];

  departureTimeRange: [min: number, max: number];
  arrivalTimeRange: [min: number, max: number];
  travelTime: [min: number, max: number];

  departureAirports: string[];
  arrivalAirports: string[];
  transferCities: string[];

  baggage: BaggageFilter;
}
