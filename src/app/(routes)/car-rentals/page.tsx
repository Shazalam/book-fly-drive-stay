
import { Metadata } from "next";
import HeroSection from "./HeroSection";
import ServiceFeatures from "./ServiceFeatures";
import RentalProcess from "./RentalProcess";
import ServiceAreas from "./ServiceAreas";
import CTASection from "@/app/(components)/common/CTASection";


export const metadata: Metadata = {
  title: "Premium Car Rentals | USA & Canada | Luxury & Economy Vehicles",
  description: "Expert car rental reservation service across USA & Canada. Luxury sedans, SUVs, economy cars with personalized booking assistance and professional service.",
  keywords: [
    "car rental USA",
    "car rental Canada",
    "luxury car rental",
    "business rental cars",
    "premium vehicles",
    "car rental service USA",
    "vehicle rental Canada",
    "SUV rental",
    "sedan rental",
    "car reservation service",
    "North America car rental",
    "professional car booking"
  ],
  openGraph: {
    title: "Premium Car Rentals | USA & Canada",
    description: "Expert car rental reservation service across United States and Canada with personalized assistance",
    images: [
      {
        url: "/logo.png",
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
    title: "Premium Car Rentals | USA & Canada",
    description: "Expert car rental service with personalized booking assistance",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://bookflydrivestay.com/car-rentals",
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