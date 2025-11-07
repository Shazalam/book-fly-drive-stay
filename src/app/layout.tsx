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
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://www.bookflydrivestay.com'
      : 'http://localhost:3000'
  ),
  title: {
    template: "%s | Book fly drive stay",
    default: "Book fly drive stay",
  },
  description: "Cover your journey in no time with our travel booking service.",
  icons: {
    icon: "/logo.png",
  },
  keywords: ["travel", "flight", "booking", "drive", "hotel", "trip"],
  openGraph: {
    title: "Book fly drive stay",
    description:
      "Cover your journey in no time with our travel booking service.",
    url: "https://www.bookflydrivestay.com",
    siteName: "Book fly drive stay",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Book fly drive stay",
      },
    ],
    locale: "en_US",
    type: "website",
  }
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