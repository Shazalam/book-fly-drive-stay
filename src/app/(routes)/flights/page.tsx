import React from "react";
import Head from "next/head";
import FlightHero from "./FlightHero";
import ServiceProcess from "./ServiceProcess";
import ServiceFeatures from "./ServiceFeatures";
import ServiceBenefits from "./ServiceBenefits";
import FlightCTA from "./FlightCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Flight Reservations | USA & Canada | Expert Booking Service",
  description: "Expert flight reservation service across USA & Canada. We handle your flight bookings with personalized service, best routes, and competitive fares. Professional travel assistance.",
  keywords: [
    "flight reservations USA",
    "flight booking Canada",
    "premium flight service",
    "expert flight booking",
    "travel booking assistance",
    "flight reservation service",
    "USA Canada flights",
    "professional flight booking",
    "air travel reservations",
    "flight booking expert"
  ],
  openGraph: {
    title: "Premium Flight Reservations | USA & Canada",
    description: "Expert flight reservation service across United States and Canada with personalized booking assistance",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Premium Flight Reservations USA Canada",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Flight Reservations | USA & Canada",
    description: "Expert flight reservation service with personalized booking assistance",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://bookflydrivestay.com/flights",
  },
};


const Flights = () => {
  return (
    <>
      <Head>
        <title>Premium Flight Reservation Service | BookFlyDriveStay</title>
        <meta
          name="description"
          content="Expert flight reservation service for USA & Canada. We handle your flight bookings with premium service and exclusive deals."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <FlightHero />
        <ServiceProcess />
        <ServiceFeatures />
        <ServiceBenefits />
        <FlightCTA />
      </div>
    </>
  );
};

export default Flights;