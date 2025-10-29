import React from "react";

export default function CarLocation({ data }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Car Rental Location</h3>
      <div className="space-y-2 text-sm text-gray-700">
        <p>📍 Pickup: {data.pickup.location}</p>
        <p>🕓 {data.pickup.date}</p>
        <p>📍 Drop-off: {data.dropoff.location}</p>
        <p>🕓 {data.dropoff.date}</p>
        <p>🕒 Hours: {data.pickup.operationHours}</p>
      </div>
    </div>
  );
}
