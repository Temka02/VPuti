import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth?.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
