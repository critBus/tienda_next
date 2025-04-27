import { LocationType } from "@/store/slices/locationSlice";

export function getLocationLabel(loc: LocationType) {
  if (loc.townName) return loc.townName;
  if (loc.municipalityName) return loc.municipalityName;
  if (loc.provinceName) return loc.provinceName;
  return "Todo el país";
}
