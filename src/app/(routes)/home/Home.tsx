import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";
import ServicesOverview from './services/ServicesGrid';
import HowWeWork from './HowWeWork/HowWeWork';
import CTASection from '@/app/(components)/common/CTASection';
import { Metadata } from 'next';




export const metadata: Metadata = {
  // TIER 1: CRITICAL
  title: {
    default: "Book Cheap Flights, Hotels, Cars & Cruises - Best Deals",
    template: '%s | BookFlyDriveStay',
  },

  description: "Compare flights, hotels, cars & cruises from hundreds of providers. Find your best deal in minutes with transparent pricing—no hidden fees.",

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bookflydrivestay.com',
    siteName: 'BookFlyDriveStay',
    title: 'BookFlyDriveStay - Complete Travel Booking Solution',
    description: 'Book your complete journey in one place. Flights, hotels, car rentals & cruises with 24/7 support and best price guarantee.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BookFlyDriveStay - Travel Booking Platform',
        type: 'image/png',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // TIER 2: HIGHLY RECOMMENDED
  keywords: [
    'book flights online',
    'hotel reservations',
    'car rental booking',
    'cruise deals',
    'cheap flights',
    'vacation packages',
    'travel booking platform',
    'worldwide travel',
    "travel", "flight", "booking", "drive", "hotel", "trip"
  ],

  alternates: {
    canonical: 'https://www.bookflydrivestay.com',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@bookflydrivestay',
    creator: '@bookflydrivestay',
    title: 'BookFlyDriveStay - Flights, Hotels, Cars & Cruises',
    description: 'Your all-in-one travel booking platform with unbeatable deals.',
    images: ['/twitter-image.png'],
  },

  icons: {
    icon: [
      { url: '/icons/logo.png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  verification: {
    google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // TIER 3: NICE TO HAVE
  manifest: '/site.webmanifest',

  authors: [{ name: 'BookFlyDriveStay' }],

  category: 'travel',

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  
};

const Home = () => {

  return (
    <>
      <div className="bg-gray-50 scroll-smooth">
        {/* Hero Section */}
        <HeroSection />

        {/* Car Rental Partners */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-white">
          <CarRentalCompanies />
        </div>

        {/* Our Services Overview */}
        <div id="services" className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-gray-50 scroll-mt-20">
          <ServicesOverview />
        </div>

        {/* How We Work */}
        <div className="bg-white">
          <HowWeWork />
        </div>

        {/* Contact CTA */}
        <div id="contact" className="scroll-mt-20">
          <CTASection
            title="Ready to Plan Your"
            titleHighlight="Journey?"
            description="Contact us directly for personalized travel reservation services."
            descriptionHighlight="Let us handle the details while you focus on your adventure."
            trustBadge="We respect your privacy • No hidden fees • Expert service"
            gradientFrom="from-blue-900"
            gradientVia="via-indigo-900"
            gradientTo="to-purple-900"
          />

        </div>
      </div>
    </>
  );
};

export default Home;
