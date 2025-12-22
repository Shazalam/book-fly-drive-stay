import React from "react";
import FlightHero from "./FlightHero";
import ServiceProcess from "./ServiceProcess";
import ServiceFeatures from "./ServiceFeatures";
import ServiceBenefits from "./ServiceBenefits";
import CTASection from "@/app/(components)/common/CTASection";

import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Flight Deals USA & Canada | Compare & Book Best Airfares Online",

  description: "Compare flight prices across USA & Canada. Find cheap domestic & international airfares, direct and connecting flights from top airlines. Transparent pricing, instant booking—no hidden fees.",

  keywords: [
    "cheap flights USA",
    "compare flight prices",
    "flight deals Canada",
    "book flights online",
    "domestic flight booking",
    "international airfares",
    "flights to USA",
    "flights to Canada",
    "fly one way USA Canada",
    "airfare comparison"
  ],

  openGraph: {
    title: "Flight Deals USA & Canada | Compare & Book Airfares",
    description: "Find and compare flight prices from top airlines. Cheap fares, flexible options—no hidden booking fees.",
    url: "https://www.bookflydrivestay.com/flights",
    siteName: "BookFlyDriveStay",
    images: [
      {
        url: "/flights-og.png",
        width: 1200,
        height: 630,
        alt: "Cheap Flights USA Canada - BookFlyDriveStay",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flight Deals USA & Canada | BookFlyDriveStay",
    description: "Compare airfares, find cheap flights in USA & Canada. No booking fees, instant results.",
    images: ["/flights-twitter.png"],
  },

  icons: {
    icon: [
      { url: '/icons/logo.png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: "https://www.bookflydrivestay.com/flights",
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
        <CTASection
          title="Ready to Take"
          titleHighlight="Flight?"
          description="Let our flight experts find your perfect journey. Contact us today to start planning."
          trustBadge="No hidden fees • Best rate guarantee • Expert service"
          trustIcon="✈️"
          gradientFrom="from-blue-900"
          gradientVia="via-indigo-900"
          gradientTo="to-purple-900"
          highlightFrom="from-blue-300"
          highlightTo="to-purple-300"
        />

      </div>
    </>
  );
};

export default Flights;