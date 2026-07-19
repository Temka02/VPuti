import type { GlobalFilters } from "./GlobalFilters";
import type { LegFilters } from "./LegFilters";

export interface SearchFilters {
  legs: LegFilters[];
  globalFilters: GlobalFilters;
}
