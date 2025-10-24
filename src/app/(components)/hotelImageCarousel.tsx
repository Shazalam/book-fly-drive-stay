'use client';


import 'swiper/css';

export default function HotelImagesCarousel() {
  return (
    <div className="w-full h-[50vh] relative bg-[url('/hotels.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Book Luxury Hotels Across the U.S.
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
          ✔️ Best Price Guarantee &nbsp; | &nbsp; ✔️ Free Cancellation &nbsp; | &nbsp; ✔️ 24/7 Support
        </p>
        <p className="mt-2 text-sm sm:text-base opacity-90">
          Mountain resorts, countryside retreats & city escapes at your fingertips
        </p>
      </div>
    </div>
  );
}
