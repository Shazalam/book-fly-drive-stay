import React from "react";
// import Image from "next/image";

interface CarData {
  name: string;
  model: string;
  features: string[];
  company: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  totalPrice: number;
}

interface CarOverviewProps {
  data: CarData;
} 

export default function CarOverview({ data }: CarOverviewProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 bg-white rounded-2xl shadow-md p-6">
      {/* Left: Car Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="text-gray-500">{data.model}</p>
        <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
          {data.features.map((f: string) => (
            <span key={f} className="border rounded-lg px-2 py-1 bg-gray-50">
              {f}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          {data.company} | {data.rating} ⭐ ({data.reviews} reviews)
        </p>
      </div>

      {/* Right: Pricing */}
      <div className="w-full lg:w-72 border rounded-xl p-4 bg-gray-50 flex flex-col justify-between">
        <div>
          <p className="text-gray-600 text-sm">Pay at pickup</p>
          <h3 className="text-3xl font-bold text-gray-800">${data.pricePerDay}</h3>
          <p className="text-sm text-green-600">Free cancellation</p>
          <p className="text-gray-500 text-sm mt-2">
            Total: <strong>${data.totalPrice}</strong>
          </p>
        </div>
        <button className="mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Reserve
        </button>
      </div>
    </div>
  );
  
}
