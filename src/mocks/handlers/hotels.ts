import { http, HttpResponse } from "msw";
import { MOCK_HOTELS } from "../data/mockHotels";

export const hotelHandlers = [
  http.get("/api/hotels", () => {
    return HttpResponse.json(MOCK_HOTELS);
  }),
];
