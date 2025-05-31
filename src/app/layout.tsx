// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "../app/styles/globals.css";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import GoogleTagManager from './components/gTagManager';
// import Script from 'next/script';
// import { useEffect } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Book fly drive free",
//     default: "Book fly drive free",
//   },
//   description: "Cover your journey in no time with our travel booking service.",
//   icons: {
//     icon: "/logo.png",
//   },
//   keywords: ["travel", "flight", "booking", "drive", "hotel", "trip"],
//   openGraph: {
//     title: "Book fly drive free",
//     description:
//       "Cover your journey in no time with our travel booking service.",
//     url: "https://www.bookflydrivestay.com",
//     siteName: "Book fly drive free",
//     images: [
//       {
//         url: "/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Book fly drive free",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
       
       
//         <GoogleTagManager/>
//         <Navbar />
//         <div className="md:pt-[80px] pt-[100px]"> {children}</div>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/styles/globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GoogleTagManager from './components/gTagManager';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Book fly drive free",
    default: "Book fly drive free",
  },
  description: "Cover your journey in no time with our travel booking service.",
  icons: {
    icon: "/logo.png",
  },
  keywords: ["travel", "flight", "booking", "drive", "hotel", "trip"],
  openGraph: {
    title: "Book fly drive free",
    description:
      "Cover your journey in no time with our travel booking service.",
    url: "https://www.bookflydrivestay.com",
    siteName: "Book fly drive free",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Book fly drive free",
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
        <GoogleTagManager />
        <Navbar />
        <div className="md:pt-[80px] pt-[100px]">{children}</div>
        <Footer />c
      </body>
    </html>
  );
}
