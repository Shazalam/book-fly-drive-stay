"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMenu, 
  FiX,
  FiHome,
  FiCalendar,
  FiMapPin,
  FiPhone,
  FiMessageSquare
} from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import "../../styles/globals.css";
import logo from '../../../../public/logo.png';
import Image from "next/image";

const navList = [
  {
    name: "Home",
    href: "/",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    name: "Car Rentals",
    href: "/car-rentals",
    icon: <RiCarLine className="w-5 h-5" />,
  },
  {
    name: "Flights",
    href: "/flights",
    icon: <IoAirplaneOutline className="w-5 h-5" />,
  },
  {
    name: "Hotels",
    href: "/hotels",
    icon: <HiOutlineBuildingOffice2 className="w-5 h-5" />,
  },
  {
    name: "Cruise",
    href: "/cruise",
    icon: <RiShipLine className="w-5 h-5" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar when clicking outside
  useEffect(() => {
    if (!isMounted) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest("#navbar-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, isMounted]);

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-[60px] h-[60px] bg-gray-200 rounded animate-pulse"></div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={50}
                priority
                className="hover:rotate-[-5deg] transition-transform"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {navList.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${pathname === item.href
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className={pathname === item.href ? "text-white" : "text-blue-600"}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
            
            {/* Contact Section */}
            <motion.div 
              className="hidden lg:flex items-center gap-3 ml-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex cursor-pointer border-l-2 pl-4 justify-center items-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xl p-2 text-blue-600"
                >
                  <FiPhone />
                </motion.div>
                <span className="flex flex-col">
                  <span className="text-xs pl-1 text-gray-500">
                    Call 24/7 for deals
                  </span>
                  <a
                    href="tel:+18449545425"
                    className="text-lg text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    +1 (844) 954-5425
                  </a>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <FiMenu />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="navbar-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-200"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={logo}
                  alt="logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl p-2 rounded-full hover:bg-gray-200 transition-colors"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FiX />
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-2 flex-grow">
                {navList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-4 rounded-xl text-lg transition-colors ${pathname === item.href
                          ? "bg-blue-600 text-white shadow-md"
                          : "hover:bg-blue-100 text-gray-700"
                        }`}
                    >
                      <span className={`${pathname === item.href ? "text-white" : "text-blue-600"}`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Section */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h3>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+18449545425"
                    className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg text-blue-600 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <FiPhone className="text-blue-500" />
                    <span>+1 (844) 954-5425</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/18449545425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-100 rounded-lg text-green-600 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp className="text-green-500" />
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;