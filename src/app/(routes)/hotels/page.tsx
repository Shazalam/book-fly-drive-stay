import { Metadata } from "next";
import HotelHeroSection from "./HotelHeroSection";
import ServiceProcess from "./ServiceProcess";
import HotelFeatures from "./HotelFeatures";
import CTASection from "@/app/(components)/common/CTASection";

export const metadata: Metadata = {
  // Title: 86 characters (fully packed, still within Google's max pixel width for most devices)
  title: "Compare & Book Hotels in USA, Canada & Worldwide | Best Deals on Luxury, Resort, & Budget Stays",

  // Description: 189 characters, ensures the most important selling points and keywords appear first—Google will display up to around 920px (roughly 150-160 characters), often including the opening CTAs, locations, and benefits.
  description: "Compare hotel prices in USA, Canada & worldwide. Book luxury, resort, and budget hotels with trusted reviews, transparent pricing, exclusive deals, and instant confirmation—no hidden fees.",

  icons: {
    icon: [
      { url: '/icons/logo.png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  keywords: [
    "compare hotels USA",
    "hotel deals Canada",
    "book hotels online",
    "luxury hotel deals",
    "budget hotels worldwide",
    "resort bookings",
    "exclusive hotel offers",
    "hotel price comparison",
    "last minute hotel deals",
    "best hotels in USA",
    "hotels near me",
    "trusted hotel reviews"
  ],

  openGraph: {
    // Shorter, “headline-style” for social, 69 characters
    title: "Hotel Deals USA, Canada & Worldwide | Compare Prices & Book Instantly",
    description: "Discover and compare hotel deals in USA, Canada, and around the world. Book luxury, resorts, and budget stays with confidence and transparent pricing.",
    url: "/hotels",
    siteName: "BookFlyDriveStay",
    images: [
      {
        url: "/hotels-og.png", // flight-specific or brand image for high click-through 
        width: 1200,
        height: 630,
        alt: "Hotel Deals Worldwide - BookFlyDriveStay",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Hotel Deals: USA, Canada, Worldwide | BookFlyDriveStay",
    description: "Find, compare, and book hotels in top destinations—luxury, resorts & budget. Get exclusive online deals and instant confirmation.",
    images: ["/hotels-twitter.png"],
  },

  alternates: {
    canonical: "https://bookflydrivestay.com/hotels",
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
