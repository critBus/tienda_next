import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LocationType =
  | { type: "country" }
  | { type: "province"; id: number; name: string }
  | { type: "municipality"; id: number; name: string }
  | { type: "town"; id: number; name: string };

const STORAGE_KEY = "selectedLocation";

function loadInitialLocation(): LocationType {
  // Devuelve un valor predeterminado para evitar desajustes de hidratación
  return { type: "country" };
}

const initialState: { selectedLocation: LocationType } = {
  selectedLocation: loadInitialLocation(),
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<LocationType>) {
      state.selectedLocation = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      }
    },
    hydrateLocation(state) {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          state.selectedLocation = JSON.parse(stored);
        }
      }
    },
  },
});

export const { setLocation, hydrateLocation } = locationSlice.actions;
export default locationSlice.reducer;
