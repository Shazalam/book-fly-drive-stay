// src/app/api/locations/route.ts
import axios from "axios";
import { AmadeusApiResponse, AmadeusLocation, GoogleApiResponse, GooglePrediction, NormalizedLocation } from "@/app/(types)/location";
import { badRequest, ErrorCode, internalError, success } from "@/app/(lib)/utils/api-response";

// 🟢 STEP 1: Get Amadeus Access Token
const getAmadeusAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "WA05cvaK3pjQAXn60MRMQIgEHeV9oAGO",
        client_secret: "4KDwaO9hGpbq2rVE",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error: unknown) {
    // Safe error handling for unknown type
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError(error)) {
      // Axios error with response data
      errorMessage = error.response?.data ? JSON.stringify(error.response.data) : error.message;
    } else if (error instanceof Error) {
      // Standard Error object
      errorMessage = error.message;
    } else {
      // Fallback for other error types
      errorMessage = String(error);
    }

    console.error("❌ Amadeus token error:", errorMessage);
    throw new Error("Failed to authenticate Amadeus");
  }
};


// 🟡 STEP 2: Handle GET request
export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search");

  if (!query) {
    return badRequest("Missing search query");
  }

  try {
    // 1️⃣ Get Amadeus token
    const amadeusToken = await getAmadeusAccessToken();

    // 2️⃣ Google API key
    const apiKey = "AIzaSyCMsR7vOQIvIKO4m-VfO3_DFdMiEHOYM2I";

    // 3️⃣ Make both API requests concurrently
    const [amadeusRes, googleRes] = await Promise.all([
      axios.get<AmadeusApiResponse>("https://test.api.amadeus.com/v1/reference-data/locations", {
        headers: { Authorization: `Bearer ${amadeusToken}` },
        params: {
          subType: "AIRPORT,CITY",
          keyword: query,
          "page[limit]": 5,
        },
      }),
      axios.get<GoogleApiResponse>("https://maps.googleapis.com/maps/api/place/autocomplete/json", {
        params: {
          input: query,
          key: apiKey,
          language: "en",
          components: "country:us|country:ca|country:gb|country:in|country:ae",
        },
      }),
    ]);

    // 4️⃣ Normalize and combine data into SAME FORMAT
    const googleData: NormalizedLocation[] =
      googleRes.data?.predictions?.map((pred: GooglePrediction) => ({
        id: pred.place_id,
        name: pred.structured_formatting.main_text,
        address: pred.structured_formatting.secondary_text || "",
        source: "google" as const,
      })) || [];

    const amadeusData: NormalizedLocation[] =
      amadeusRes.data?.data?.map((item: AmadeusLocation) => ({
        id: item.iataCode || item.id || "",
        name: item.name,
        address: `${item.address?.cityName || ""}, ${item.address?.countryCode || ""}`.trim().replace(/^,\s*|,\s*$/g, ''),
        source: "amadeus" as const,
      })) || [];

    // 5️⃣ Combine both datasets
    const combined = [...googleData, ...amadeusData];

    // 6️⃣ Return unified JSON
    return success(
      { query, count: combined.length, data: combined },
      "Locations fetched successfully"
    );
  } catch (error: unknown) {
    // Safe error handling for unknown type
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError(error)) {
      // Axios error with response data
      errorMessage = error.response?.data ? JSON.stringify(error.response.data) : error.message;
    } else if (error instanceof Error) {
      // Standard Error object
      errorMessage = error.message;
    } else {
      // Fallback for other error types
      errorMessage = String(error);
    }

    console.error("❌ Combined search error:", errorMessage);
    return internalError("Failed to fetch combined data", ErrorCode.EXTERNAL_SERVICE_ERROR, {
      error: errorMessage,
    });
  }
}