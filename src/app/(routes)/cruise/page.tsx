import CruiseCTA from "./CruiseCTA";
import CruiseFeatures from "./CruiseFeatures.";
import CruiseHeroSection from "./CruiseHeroSection";
import CruiseServiceProcess from "./CruiseServiceProcess";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Cruise Reservations | Expert Booking Service | Worldwide Destinations",
  description: "Expert cruise reservation service for luxury voyages worldwide. Personalized booking assistance, exclusive perks, and professional service for Caribbean, Alaska, Mediterranean cruises and more.",
  keywords: [
    "cruise reservations",
    "luxury cruise booking",
    "cruise booking service",
    "expert cruise reservations",
    "Caribbean cruises",
    "Alaska cruises",
    "Mediterranean cruises",
    "cruise vacation planning",
    "cruise booking assistance",
    "professional cruise service"
  ],
  openGraph: {
    title: "Luxury Cruise Reservations | Expert Booking Service",
    description: "Expert cruise reservation service with personalized assistance for luxury voyages worldwide",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Luxury Cruise Reservations",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Cruise Reservations | Expert Booking Service",
    description: "Expert cruise reservation service with personalized assistance",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://bookflydrivestay.com/cruise",
  },
};



export default function Cruise() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CruiseHeroSection />
      <CruiseServiceProcess />
      <CruiseFeatures />
      <CruiseCTA />
    </main>
  );
}
