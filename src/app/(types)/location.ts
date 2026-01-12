// Define interfaces for API responses
export interface GooglePrediction {
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text?: string;
  };
}

export interface GoogleApiResponse {
  predictions?: GooglePrediction[];
}

export interface AmadeusAddress {
  cityName?: string;
  countryCode?: string;
}

export interface AmadeusLocation {
  iataCode?: string;
  id?: string;
  name: string;
  address?: AmadeusAddress;
}

export interface AmadeusApiResponse {
  data?: AmadeusLocation[];
}

export interface NormalizedLocation {
  id: string;
  name: string;
  address: string;
  source: "google" | "amadeus";
}

export interface LocationsPayload {
  query: string;
  count: number;
  data: NormalizedLocation[];
}

export interface LocationsState {
  // data
  items: NormalizedLocation[];
  query: string;
  count: number;

  // per-action UI state
  fetchLocationsLoading: boolean;
  fetchLocationsError: string | null;
  fetchLocationsSuccessMsg: string | null;
}
