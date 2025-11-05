import { Metadata } from "next";
import HotelHeroSection from "./HotelHeroSection";
import ServiceProcess from "./ServiceProcess";
import HotelFeatures from "./HotelFeatures";
import CTASection from "@/app/(components)/common/CTASection";

export const metadata: Metadata = {
  title: "Luxury Hotel Reservations | Expert Booking Service | USA & Worldwide",
  description: "Expert hotel reservation service for luxury accommodations worldwide. Personalized booking assistance, handpicked properties, and professional service.",
  keywords: [
    "hotel reservations",
    "luxury hotel booking",
    "hotel booking service",
    "expert hotel reservations",
    "personalized hotel booking",
    "hotel reservation assistance",
    "luxury accommodations",
    "resort bookings",
    "professional hotel service"
  ],
  openGraph: {
    title: "Luxury Hotel Reservations | Expert Booking Service",
    description: "Expert hotel reservation service with personalized assistance for luxury accommodations worldwide",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Luxury Hotel Reservations",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hotel Reservations | Expert Booking Service",
    description: "Expert hotel reservation service with personalized assistance",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://bookflydrivestay.com/hotels",
  },
};


export default function Hotels() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HotelHeroSection />
      <ServiceProcess />
      <HotelFeatures />
      <CTASection
        title="Ready for Your Next"
        titleHighlight="Getaway?"
        description="Let our experts find your perfect hotel. Contact us today to start planning."
        trustBadge="No hidden fees • Best rate guarantee • Expert service"
        trustIcon="🏨"
        gradientFrom="from-indigo-900"
        gradientVia="via-purple-900"
        gradientTo="to-pink-900"
        highlightFrom="from-pink-300"
        highlightTo="to-yellow-300"
        textColor="text-purple-100"
        buttonTextColor="text-indigo-900"
        buttonHoverBg="hover:bg-purple-50"
        shadowColor="hover:shadow-purple-500/50"
      />

    </main>
  );
}
