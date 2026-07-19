import { http, HttpResponse } from "msw";
import { MOCK_TICKETS } from "../data/mockFlights";

export const flightHandlers = [
  http.get("/api/flights", () => {
    return HttpResponse.json(MOCK_TICKETS);
  }),
];
