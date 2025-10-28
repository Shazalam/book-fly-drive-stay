// src/app/api/locations/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

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
  } catch (error: any) {
    console.error("❌ Amadeus token error:", error.response?.data || error.message);
    throw new Error("Failed to authenticate Amadeus");
  }
};

// 🟡 STEP 2: Handle GET request
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search");

  if (!query) {
    return NextResponse.json({ success: false, message: "Missing search query", data: [] });
  }

  try {
    // 1️⃣ Get Amadeus token
    const amadeusToken = await getAmadeusAccessToken();

    // 2️⃣ Google API key
    const apiKey = "AIzaSyCMsR7vOQIvIKO4m-VfO3_DFdMiEHOYM2I";

    // 3️⃣ Make both API requests concurrently
    const [amadeusRes, googleRes] = await Promise.all([
      axios.get("https://test.api.amadeus.com/v1/reference-data/locations", {
        headers: { Authorization: `Bearer ${amadeusToken}` },
        params: {
          subType: "AIRPORT,CITY",
          keyword: query,
          "page[limit]": 5,
        },
      }),
      axios.get("https://maps.googleapis.com/maps/api/place/autocomplete/json", {
        params: {
          input: query,
          key: apiKey,
          language: "en",
          components: "country:us|country:ca|country:gb|country:in|country:ae",
        },
      }),
    ]);

    // 4️⃣ Normalize and combine data into SAME FORMAT
    const googleData =
      googleRes.data?.predictions?.map((pred: any) => ({
        id: pred.place_id,
        name: pred.structured_formatting.main_text,
        address: pred.structured_formatting.secondary_text || "",
        source: "google",
      })) || [];

    const amadeusData =
      amadeusRes.data?.data?.map((item: any) => ({
        id: item.iataCode || item.id || "",
        name: item.name,
        address: `${item.address?.cityName || ""}, ${item.address?.countryCode || ""}`,
        source: "amadeus",
      })) || [];

    // 5️⃣ Combine both datasets
    const combined = [...googleData, ...amadeusData];

    // 6️⃣ Return unified JSON
    return NextResponse.json({
      success: true,
      query,
      count: combined.length,
      data: combined,
    });
  } catch (error: any) {
    console.error("❌ Combined search error:", error.response?.data || error.message);
    return NextResponse.json(
      { success: false, message: "Failed to fetch combined data" },
      { status: 500 }
    );
  }
}
