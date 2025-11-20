
import CTASection from "@/app/(components)/common/CTASection";
import CruiseFeatures from "./CruiseFeatures.";
import CruiseHeroSection from "./CruiseHeroSection";
import CruiseServiceProcess from "./CruiseServiceProcess";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cruise Deals | Compare Caribbean, Alaska, Mediterranean & More",

  description: "Compare cruise prices from top cruise lines. Caribbean, Alaska, Mediterranean, Europe cruises and more. Transparent pricing, instant quotes, find your perfect voyage.",

  icons: {
    icon: [
      { url: '/icons/logo.png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  keywords: [
    "cruise deals",
    "compare cruise prices",
    "cheap cruises 2025",
    "Caribbean cruise deals",
    "Alaska cruise packages",
    "Mediterranean cruises",
    "cruise booking online",
    "last minute cruise deals",
    "family cruise vacations",
    "cruise price comparison",
    "best cruise deals",
    "affordable cruises",
    "cruise vacation packages",
    "European river cruises",
    "all inclusive cruise deals"
  ],

  openGraph: {
    title: "Cruise Deals | Compare Top Cruise Lines & Destinations",
    description: "Compare cruise prices across Caribbean, Alaska, Mediterranean & more. Find the best deals from leading cruise lines.",
    url: "https://bookflydrivestay.com/cruises",
    siteName: "BookFlyDriveStay",
    images: [
      {
        url: "/cruises-og.png",
        width: 1200,
        height: 630,
        alt: "BookFlyDriveStay Cruise Deals Worldwide",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cruise Deals | BookFlyDriveStay",
    description: "Compare prices on Caribbean, Alaska, Mediterranean cruises. Best deals from top cruise lines.",
    images: ["/cruises-twitter.png"],
  },

  alternates: {
    canonical: "https://bookflydrivestay.com/cruises",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
