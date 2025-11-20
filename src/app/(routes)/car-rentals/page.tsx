
import { Metadata } from "next";
import HeroSection from "./HeroSection";
import ServiceFeatures from "./ServiceFeatures";
import RentalProcess from "./RentalProcess";
import ServiceAreas from "./ServiceAreas";
import CTASection from "@/app/(components)/common/CTASection";


export const metadata: Metadata = {
  // Title uses template from root layout automatically
  title: "Car Rentals USA & Canada | Compare Prices on Economy to Luxury",

  // Startup-authentic, SEO-optimized description
  description: "Compare car rental prices across USA & Canada. Economy cars, SUVs, luxury sedans from top providers. Transparent pricing, instant quotes, no hidden fees.",
  
  icons: {
    icon: [
      { url: '/icons/logo.png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  // Enhanced, long-tail keywords for better targeting
  keywords: [
    "car rental USA",
    "car rental Canada",
    "cheap car rental United States",
    "SUV rental near me",
    "luxury car rental comparison",
    "economy car booking",
    "airport car rental deals",
    "weekly car rental rates",
    "business car rental North America",
    "rental car price comparison",
    "affordable vehicle rental",
    "car hire USA Canada"
  ],
  openGraph: {
    title: "Car Rentals USA & Canada | Compare Top Providers",
    description: "Compare car rental prices from leading providers. Economy to luxury vehicles across USA & Canada with transparent pricing.",
    images: [
      {
        url: "/icons/logo.png",
        width: 1200,
        height: 630,
        alt: "Premium Car Rentals USA Canada",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rentals USA & Canada | BookFlyDriveStay",
    description: "Compare prices on economy, SUV & luxury car rentals. Transparent pricing across North America.",
    images: ["/icons/logo.png"],
  },
  alternates: {
    canonical: "https://bookflydrivestay.com/car-rentals",
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

const CarRentals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <ServiceFeatures />
      <RentalProcess />
      <ServiceAreas />
      <CTASection
        title="Ready to Experience Premium Car Rental?"
        description="Join thousands of satisfied customers across the United States and Canada who trust us for their transportation needs."
        gradientFrom="from-blue-900"
        gradientVia="via-indigo-900"
        gradientTo="to-indigo-900"
      />

    </div>
  );
};

export default CarRentals;