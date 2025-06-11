// components/hotelReservationForm.tsx
'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Users, MapPin, Phone } from 'lucide-react';

export default function HotelReservationForm() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  return (
    <div className="space-y-6">
      {/* Location Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Date Picker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>

      {/* Guests */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Users className="h-5 w-5 text-gray-400" />
        </div>
        <select
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
          <option value="7">7+ Guests</option>
        </select>
      </div>

      {/* Call Button */}
      <a
        href="tel:+1 (844) 954-5425"
        className="flex items-center justify-center w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.01]"
      >
        <Phone className="h-5 w-5 mr-2" />
        Call to Book: (844) 954-5425
      </a>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 justify-center pt-4">
        {['Deals', 'Pet Friendly', 'Free WiFi', 'Pool', 'Breakfast Included'].map((filter) => (
          <button
            key={filter}
            className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}