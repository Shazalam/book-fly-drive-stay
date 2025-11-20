import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/styles/globals.css";
import Navbar from "./(components)/common/Navbar";
import Footer from "./(components)/common/Footer";
import GoogleTagManager from './(components)/gTagManager';
import Providers from "./ReduxProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalAuthInitializer from "./GlobalAuthInitializer/GlobalAuthInitializer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Book fly drive stay",
//     default: "Book fly drive stay",
//   },
//   description: "Cover your journey in no time with our travel booking service.",
//   icons: {
//     icon: "/logo.png",
//   },
//   keywords: ["travel", "flight", "booking", "drive", "hotel", "trip"],
//   openGraph: {
//     title: "Book fly drive stay",
//     description:
//       "Cover your journey in no time with our travel booking service.",
//     url: "https://www.bookflydrivestay.com",
//     siteName: "Book fly drive stay",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Book fly drive stay",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   }
// };

export const metadata: Metadata = {
  // TIER 1: CRITICAL // ✅ ONLY place where metadataBase is defined
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.bookflydrivestay.com'
      : 'http://localhost:3000'
  ),

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <GoogleTagManager />
          <Navbar />
          <Toaster position="top-right" />
          {/* ✅ Run user fetch logic once globally */}
          <GlobalAuthInitializer />
          <div className="sm:pt-[100px] md:pt-[80px] bg-amber-500">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}