import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterType {
  provinceId?: number | null;
  municipalityId?: number | null;
  townId?: number | null;
}

const STORAGE_KEY = "selectedLocation";

function loadInitialLocation(): FilterType {
  return {};
}

const initialState: { selectedLocation: FilterType } = {
  selectedLocation: loadInitialLocation(),
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<FilterType>) {
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
