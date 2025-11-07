"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiLogOut,
  FiChevronRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../../public/icons/logo.png";
import { useAppSelector } from "@/app/(hooks)/redux";

const navList = [
  { name: "Home", href: "/", icon: <FiHome className="w-4 h-4" /> },
  { name: "Cars", href: "/car-rentals", icon: <RiCarLine className="w-4 h-4" /> },
  { name: "Flights", href: "/flights", icon: <IoAirplaneOutline className="w-4 h-4" /> },
  { name: "Hotels", href: "/hotels", icon: <HiOutlineBuildingOffice2 className="w-4 h-4" /> },
  { name: "Cruise", href: "/cruise", icon: <RiShipLine className="w-4 h-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user } = useAppSelector(
    (state) => state.auth
  );
 
  const handleLogout = () => {
    setUserMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Professional Desktop NavLink Component
  const DesktopNavLink = ({ item }: { item: typeof navList[0] }) => {
    const active = pathname === item.href;

    return (
      <Link
        href={item.href}
        className={`
          group relative flex items-center gap-2 px-4 py-2 
          font-medium transition-all duration-200 rounded-lg
          ${active ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
        `}
        aria-current={active ? "page" : undefined}
      >
        {/* Icon */}
        <span
          className={`
          transition-colors duration-200
          ${active ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"}
        `}
        >
          {item.icon}
        </span>

        {/* Text */}
        <span className="relative">
          {item.name}

          {/* Active underline indicator */}
          {active && (
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              layoutId="desktopActiveIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          {/* Hover underline effect */}
          {!active && (
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-200 group-hover:w-full" />
          )}
        </span>

        {/* Subtle background on hover */}
        <div
          className={`
          absolute inset-0 rounded-lg transition-all duration-200 -z-10
          ${active ? "bg-blue-50/50" : "group-hover:bg-gray-50"}
        `}
        />
      </Link>
    );
  };

  // Mobile NavLink Component
  const MobileNavLink = ({ item }: { item: typeof navList[0] }) => {
    const active = pathname === item.href;

    return (
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`
          flex items-center justify-between w-full p-4 rounded-lg transition-all duration-200
          ${active
            ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          }
        `}
        aria-current={active ? "page" : undefined}
      >
        <div className="flex items-center gap-4">
          <span
            className={`
            transition-colors duration-200
            ${active ? "text-blue-600" : "text-gray-500"}
          `}
          >
            {item.icon}
          </span>
          <span className="font-medium text-base">{item.name}</span>
        </div>

        {/* Chevron indicator */}
        <FiChevronRight
          className={`
          w-4 h-4 transition-transform duration-200
          ${active ? "text-blue-600 translate-x-1" : "text-gray-400"}
        `}
        />
      </Link>
    );
  };

  return (
    <>
      {/* Top Contact Bar - Visible on Desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span className="font-medium">+1 (844) 954-5425</span>
            </a>
            <a
              href="mailto:carrentals@bookflydrivestay.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              <span className="font-medium">carrentals@bookflydrivestay.com</span>
            </a>
          </div>
          <div className="text-xs text-blue-200">
            🌟 Your trusted travel booking partner
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200 lg:top-0"
          : "bg-white/95 backdrop-blur-md shadow-sm lg:top-10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={140}
                  height={45}
                  priority
                  className="hover:brightness-110 transition-all"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navList.map((item) => (
                <DesktopNavLink key={item.href} item={item} />
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Contact Info - Mobile/Tablet */}
              {/* <div className="flex lg:hidden items-center gap-2">
                <a
                  href="tel:+1234567890"
                  className="p-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <FiPhone className="w-4 h-4" />
                </a>
                <a
                  href="mailto:carrentals@bookflydrivestay.com"
                  className="p-2 rounded-full text-blue-600 bg-blue-50 hover:bg-100 transition-colors"
                >
                  <FiMail className="w-4 h-4" />
                </a>
              </div> */}

              {/* Login & Register Buttons */}
              {!user && (
                <div className="hidden lg:flex items-center gap-2">
                  <Link href={"/auth/login"}>
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:bg-blue-50 rounded-lg">
                      Login
                    </button>
                  </Link>
                  <Link href={"/auth/register"}>
                    <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg">
                      Register
                    </button>
                  </Link>
                </div>
              )}

              {/* User Menu */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 p-2.5 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300"
                    >
                      <FiUser className="w-5 h-5" />
                    </button>

                    <AnimatePresence>
                      {userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
                        >
                          <div className="p-2">
                            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-2">
                              <p className="text-sm font-semibold text-gray-900">Welcome back {user.firstName}!</p>
                              <p className="text-xs text-gray-600 mt-0.5">Manage your travel plans</p>
                            </div>

                            <div className="space-y-1">
                              {/* <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                <FiUser className="w-4 h-4 text-gray-500" />
                                <span className="font-medium">Profile</span>
                              </button>
                              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                <FiHeart className="w-4 h-4 text-pink-500" />
                                <span className="font-medium">Wishlists</span>
                              </button>
                              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                <FiStar className="w-4 h-4 text-amber-500" />
                                <span className="font-medium">Rewards</span>
                              </button>
                              <button
                                onClick={() => setUserMenuOpen(false)}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <FiBriefcase className="w-4 h-4" />
                                <span className="font-medium">My Trips</span>
                              </button> */}

                              <div className="border-t border-gray-100 my-2"></div>

                              <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <FiLogOut className="w-4 h-4" />
                                <span className="font-medium">Log Out</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : null}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300"
              >
                <FiMenu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image src={logo} alt="logo" width={120} height={40} className="brightness-0 invert" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Contact Section - Mobile */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <FiPhone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Call us</p>
                      <p className="text-sm font-semibold text-gray-900">+1 (844) 954-5425</p>
                    </div>
                  </a>
                  <a
                    href="mailto:carrentals@bookflydrivestay.com"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <FiMail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Email us</p>
                      <p className="text-sm font-semibold text-gray-900">carrentals@bookflydrivestay.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">
                  Navigation
                </h3>
                <nav className="space-y-2">
                  {navList.map((item) => (
                    <MobileNavLink key={item.href} item={item} />
                  ))}
                </nav>
              </div>

              {/* User Section */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-3">
                  Account
                </h3>

                {user ? (
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <FiUser className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">Profile</span>
                      </div>
                      <FiChevronRight className="w-4 h-4 text-gray-400" />
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-between p-4 bg-white rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <FiLogOut className="w-5 h-5" />
                        <span className="font-medium">Log Out</span>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/auth/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
