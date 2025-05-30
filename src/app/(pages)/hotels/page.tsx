import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Hotels bookings",
};

import HotelImagesCarousel from '../../components/hotelImageCarousel';
import HotelReservationForm from '../../components/hotelReservationForm';
import CallToReserveButton from '../../components/callToReserve';

export default function Hotels() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* 🖼️ Top full-width carousel */}
      <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh]">
        <HotelImagesCarousel />
      </div>

      {/* 📋 Reservation Form + Call Button */}
      <div className="max-w-3xl mx-auto mt-[-4rem] sm:mt-[-6rem] px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Book Your Stay</h1>
          <HotelReservationForm />
          <CallToReserveButton />
        </div>
      </div>
    </main>
  );
}
