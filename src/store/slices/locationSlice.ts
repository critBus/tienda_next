import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterType {
  provinceId?: number | null;
  municipalityId?: number | null;
  townId?: number | null;
}
export interface LocationType {
  provinceId?: number | null;
  provinceName?: string | null;
  municipalityId?: number | null;
  municipalityName?: string | null;
  townId?: number | null;
  townName?: string | null;
}

function loadInitialLocation(): LocationType {
  return {};
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
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
