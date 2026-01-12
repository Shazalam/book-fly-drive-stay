
// src/store/locations/locationThunks.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, RejectedPayload } from "@/app/(types)/common";
import { LocationsPayload, LocationsState } from "@/app/(types)/location";

const initialState: LocationsState = {
  items: [],
  query: "",
  count: 0,

  fetchLocationsLoading: false,
  fetchLocationsError: null,
  fetchLocationsSuccessMsg: null,
};

export const fetchLocations = createAsyncThunk<
  ApiResponse<LocationsPayload>,   // success type
  string,                          // search query
  { rejectValue: RejectedPayload } // reject payload
>(
  "locations/fetchLocations",
  async (search, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/locations?search=${encodeURIComponent(search)}`);

      const data: ApiResponse<LocationsPayload> = await res.json();

      if (!res.ok || data.status !== "success" || !data.data) {
        return rejectWithValue({
          message: data.message || "Failed to fetch locations",
          status: res.status,
          error: data.error,
        });
      }

      return data;
    } catch (err: unknown) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || "Network error",
        status: 500,
      });
    }
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    clearFetchLocationsError: (state) => {
      state.fetchLocationsError = null;
    },
    clearFetchLocationsSuccess: (state) => {
      state.fetchLocationsSuccessMsg = null;
    },
    clearLocationsData: (state) => {
      state.items = [];
      state.query = "";
      state.count = 0;
    },
    resetLocationsUi: (state) => {
      state.fetchLocationsLoading = false;
      state.fetchLocationsError = null;
      state.fetchLocationsSuccessMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.fetchLocationsLoading = true;
        state.fetchLocationsError = null;
        state.fetchLocationsSuccessMsg = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.fetchLocationsLoading = false;
        state.fetchLocationsError = null;

        const payload = (action.payload as ApiResponse<LocationsPayload>).data!;
        state.items = payload.data;
        state.query = payload.query;
        state.count = payload.count;
        state.fetchLocationsSuccessMsg =
          action.payload.message || "Locations fetched successfully";
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.fetchLocationsLoading = false;
        state.items = [];
        state.count = 0;
        state.fetchLocationsSuccessMsg = null;
        state.fetchLocationsError =
          action.payload?.message || "Failed to fetch locations";
      });
  },
});

export const {
  clearFetchLocationsError,
  clearFetchLocationsSuccess,
  clearLocationsData,
  resetLocationsUi,
} = locationsSlice.actions;

export default locationsSlice.reducer;

// selectors
export const selectLocations = (state: { locations: LocationsState }) =>
  state.locations;
export const selectLocationItems = (state: { locations: LocationsState }) =>
  state.locations.items;
export const selectLocationsLoading = (state: { locations: LocationsState }) =>
  state.locations.fetchLocationsLoading;
export const selectLocationsError = (state: { locations: LocationsState }) =>
  state.locations.fetchLocationsError;