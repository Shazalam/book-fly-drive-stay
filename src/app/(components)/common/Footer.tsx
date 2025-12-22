
import { FiMail, FiPhone } from "react-icons/fi";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image"
import logo from "../../../../public/icons/logo.png"


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-1 sm:px-5 md:px-19">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logo}
                alt="Book Fly Drive Stay Logo"
                width={180}
                height={60}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted travel companion for seamless flight bookings, car rentals, hotel stays, and cruise packages across North America.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a
                href="tel:+18449545425"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors group"
              >
                <FiPhone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm">+1 (844) 954-5425</span>
              </a>
              <a
                href="mailto:contact@bookflydrivestay.com"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors group"
              >
                <FiMail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">contact@bookflydrivestay.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/car-rentals"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <RiCarLine className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <IoAirplaneOutline className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <HiOutlineBuildingOffice2 className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/cruise"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <RiShipLine className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  Cruise
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get travel tips and exclusive deals delivered to your inbox.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18449545425"
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                📞 Call Us Now
              </a>
              <a
                href="mailto:contact@bookflydrivestay.com"
                className="block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">Book Fly Drive Stay</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <span>Made with ❤️ for travelers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
