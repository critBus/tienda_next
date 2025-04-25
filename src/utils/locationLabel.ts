import { LocationType } from "@/store/slices/locationSlice";

export function getLocationLabel(loc: LocationType) {
  if (loc.type === "country") return "Todo el país";
  if (loc.type === "province") return loc.name;
  if (loc.type === "municipality") return loc.name;
  if (loc.type === "town") return loc.name;
  return "";
}
