
import CTASection from "@/app/(components)/common/CTASection";
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
      <CTASection
        title="Ready to Set"
        titleHighlight="Sail?"
        description="Let our cruise specialists find your perfect voyage. Contact us today to start planning."
        trustBadge="No hidden fees • Best rate guarantee • Expert service"
        trustIcon="⚓"
        gradientFrom="from-cyan-900"
        gradientVia="via-blue-900"
        gradientTo="to-teal-900"
        highlightFrom="from-cyan-300"
        highlightTo="to-teal-300"
        textColor="text-cyan-100"
        buttonTextColor="text-cyan-900"
        buttonHoverBg="hover:bg-cyan-50"
        shadowColor="hover:shadow-cyan-500/50"
      />

    </main>
  );
}
