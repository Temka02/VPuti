import { hotelHandlers } from "./handlers/hotels";
import { authHandlers } from "./handlers/auth";
import { flightHandlers } from "./handlers/flights";

export const handlers = [...hotelHandlers, ...authHandlers, ...flightHandlers];
