// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FiMenu, 
//   FiX,
//   FiHome,
//   FiPhone
// } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import { RiCarLine, RiShipLine } from "react-icons/ri";
// import { IoAirplaneOutline } from "react-icons/io5";
// import "../../styles/globals.css";
// import logo from '../../../../public/logo.png';
// import Image from "next/image";

// const navList = [
//   {
//     name: "Home",
//     href: "/",
//     icon: <FiHome className="w-5 h-5" />,
//   },
//   {
//     name: "Car Rentals",
//     href: "/car-rentals",
//     icon: <RiCarLine className="w-5 h-5" />,
//   },
//   {
//     name: "Flights",
//     href: "/flights",
//     icon: <IoAirplaneOutline className="w-5 h-5" />,
//   },
//   {
//     name: "Hotels",
//     href: "/hotels",
//     icon: <HiOutlineBuildingOffice2 className="w-5 h-5" />,
//   },
//   {
//     name: "Cruise",
//     href: "/cruise",
//     icon: <RiShipLine className="w-5 h-5" />,
//   },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Simplified scroll handler
//   const handleScroll = useCallback(() => {
//     setScrolled(window.scrollY > 10);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Close navbar when clicking outside
//   const handleOutsideClick = useCallback((e: MouseEvent) => {
//     if (isOpen && !(e.target as HTMLElement).closest("#navbar-menu")) {
//       setIsOpen(false);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     }
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isOpen, handleOutsideClick]);

//   // Optimized NavLink component to prevent unnecessary re-renders
//   const NavLink = ({ item }: { item: typeof navList[0] }) => (
//     <motion.div 
//       whileHover={{ y: -2 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <Link
//         href={item.href}
//         className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//           pathname === item.href
//             ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
//             : "text-gray-700 hover:bg-gray-100"
//         }`}
//         onClick={() => setIsOpen(false)}
//       >
//         <span className={pathname === item.href ? "text-white" : "text-blue-600"}>
//           {item.icon}
//         </span>
//         <span>{item.name}</span>
//       </Link>
//     </motion.div>
//   );

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
//         scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
//       }`}>
//         <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="/" className="text-2xl font-bold">
//               <Image
//                 src={logo}
//                 alt="logo"
//                 width={150}
//                 height={50}
//                 priority
//                 className="hover:rotate-[-5deg] transition-transform"
//               />
//             </Link>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-4 items-center">
//             {navList.map((item, index) => (
//               <NavLink key={index} item={item} />
//             ))}

//             {/* Contact Section */}
//             <motion.div 
//               className="hidden lg:flex items-center gap-3 ml-4"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="flex cursor-pointer border-l-2 pl-4 justify-center items-center">
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="text-xl p-2 text-blue-600"
//                 >
//                   <FiPhone />
//                 </motion.div>
//                 <span className="flex flex-col">
//                   <span className="text-xs pl-1 text-gray-500">
//                     Call 24/7 for deals
//                   </span>
//                   <a
//                     href="tel:+18449545425"
//                     className="text-lg text-blue-600 font-semibold hover:text-blue-700 transition-colors"
//                   >
//                     +1 (844) 954-5425
//                   </a>
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button 
//             onClick={() => setIsOpen(true)}
//             className="md:hidden text-2xl p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label="Open menu"
//           >
//             <FiMenu />
//           </motion.button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             id="navbar-menu"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", ease: "easeInOut" }}
//             className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-200"
//           >
//             <div className="p-6 flex flex-col h-full">
//               {/* Header */}
//               <div className="flex justify-between items-center mb-8">
//                 <Image
//                   src={logo}
//                   alt="logo"
//                   width={60}
//                   height={60}
//                   className="rounded-lg"
//                   priority
//                 />
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="text-2xl p-2 rounded-full hover:bg-gray-200 transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <FiX />
//                 </button>
//               </div>

//               {/* Menu Items */}
//               <nav className="flex flex-col gap-2 flex-grow">
//                 {navList.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center gap-3 p-4 rounded-xl text-lg transition-colors ${
//                       pathname === item.href
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "hover:bg-blue-100 text-gray-700"
//                     }`}
//                   >
//                     <span className={`${pathname === item.href ? "text-white" : "text-blue-600"}`}>
//                       {item.icon}
//                     </span>
//                     <span>{item.name}</span>
//                   </Link>
//                 ))}
//               </nav>

//               {/* Contact Section */}
//               <div className="mt-auto pt-6 border-t border-gray-200">
//                 <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h3>
//                 <div className="space-y-3">
//                   <a
//                     href="tel:+18449545425"
//                     className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg text-blue-600 font-medium"
//                   >
//                     <FiPhone className="text-blue-500" />
//                     <span>+1 (844) 954-5425</span>
//                   </a>

//                   <a
//                     href="https://wa.me/18449545425"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 p-3 bg-green-100 rounded-lg text-green-600 font-medium"
//                   >
//                     <FaWhatsapp className="text-green-500" />
//                     <span>WhatsApp</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiPhone,
  FiUser,
  FiLogIn,
  FiLogOut,
  FiSettings,
  FiHeart,
  FiStar,
  FiBriefcase,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import "../../styles/globals.css";
import logo from '../../../../public/icons/logo.png';
import Image from "next/image";
import AuthModals from "../AuthModal/AuthModal";

const navList = [
  {
    name: "Home",
    href: "/",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    name: "Cars",
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
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<'auth' | 'find-my-trip' | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setUserMenuOpen(false);
    setAuthMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    setMobileUserMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (isOpen && !(e.target as HTMLElement).closest("#navbar-menu")) {
      setIsOpen(false);
    }
    if (userMenuOpen && !(e.target as HTMLElement).closest("#user-menu")) {
      setUserMenuOpen(false);
    }
    if (authMenuOpen && !(e.target as HTMLElement).closest("#auth-menu")) {
      setAuthMenuOpen(false);
    }
  }, [isOpen, userMenuOpen, authMenuOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  const openAuthModal = (modalType: 'auth' | 'find-my-trip') => {
    setAuthModalType(modalType);
    setAuthModalOpen(true);
    setAuthMenuOpen(false); // Close the dropdown menu if open
    setIsOpen(false); // Close mobile menu if open
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthModalType(null);
  };

  const NavLink = ({ item }: { item: typeof navList[0] }) => (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${pathname === item.href
          ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <span className={pathname === item.href ? "text-white" : "text-blue-600"}>
          {item.icon}
        </span>
        <span className="text-sm lg:text-base">{item.name}</span>
      </Link>
    </motion.div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
        : "bg-gradient-to-r from-blue-50/90 to-indigo-50/90 backdrop-blur-sm py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={logo}
                alt="TravelHub Logo"
                width={160}
                height={50}
                priority
                className="hover:rotate-[-5deg] transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow mx-8">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-gray-100">
              {navList.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Contact Section - Moved to the left for desktop */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex cursor-pointer justify-center items-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xl p-2 text-blue-600 bg-blue-100 rounded-full"
                >
                  <FiPhone />
                </motion.div>
                <span className="flex flex-col ml-2">
                  <span className="text-xs text-gray-500">
                    Call 24/7 for deals
                  </span>
                  <a
                    href="tel:+18449545425"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +1 (844) 954-5425
                  </a>
                </span>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300 mx-2"></div>

            {/* My Trip Button */}
            <motion.button
              onClick={() => openAuthModal('find-my-trip')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FiBriefcase className="w-4 h-4" />
              <span className="text-sm font-medium">My Trip</span>
            </motion.button>

            {/* Authentication Button */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <div className="relative" id="user-menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <FiUser className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">My Account</span>
                  </motion.button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-medium text-gray-900">Welcome!</p>
                          <p className="text-sm text-gray-500">user@example.com</p>
                        </div>
                        <div className="py-2">
                          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors">
                            <FiUser className="text-blue-500" />
                            <span>Profile</span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors">
                            <FiHeart className="text-pink-500" />
                            <span>Wishlists</span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors">
                            <FiStar className="text-amber-500" />
                            <span>Rewards</span>
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors">
                            <FiSettings className="text-gray-500" />
                            <span>Settings</span>
                          </button>
                        </div>
                        <div className="border-t border-gray-100 py-2">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <FiLogOut className="text-red-500" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="relative" id="auth-menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openAuthModal('auth')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FiUser className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign In</span>
                  </motion.button>

                  {/* <AnimatePresence>
                    {authMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
                      >
                        <button
                          // onClick={handleLogin}
                         
                          className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
                        >
                          <FiLogIn className="text-blue-500" />
                          <span>Sign In</span>
                        </button>
                        <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors" onClick={() => openAuthModal('auth')}>
                          <FiUser className="text-indigo-500" />
                          <span>Create Account</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                  
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <FiMenu className="w-5 h-5" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Sidebar - Fixed Scrollable Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="navbar-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-200 flex flex-col"
            >
              {/* Fixed Header */}
              <div className="flex-shrink-0 p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <Image
                    src={logo}
                    alt="TravelHub Logo"
                    width={120}
                    height={40}
                    className="rounded-lg"
                    priority
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {/* My Trip Button - Mobile */}
                  <motion.button
                    onClick={() => openAuthModal('find-my-trip')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 mb-6 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md w-full"
                  >
                    <FiBriefcase className="w-5 h-5" />
                    <span className="font-medium">My Trip</span>
                  </motion.button>

                  {/* Auth Section - Mobile with Dropdown */}
                  <div className="mb-6">
                    {isLoggedIn ? (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 overflow-hidden">
                        {/* User Info with Dropdown Toggle */}
                        <button
                          onClick={() => setMobileUserMenuOpen(!mobileUserMenuOpen)}
                          className="flex items-center justify-between w-full p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white">
                              <FiUser className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-800">Welcome back!</p>
                              <p className="text-sm text-gray-600">user@example.com</p>
                            </div>
                          </div>
                          {mobileUserMenuOpen ? (
                            <FiChevronUp className="text-gray-500" />
                          ) : (
                            <FiChevronDown className="text-gray-500" />
                          )}
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {mobileUserMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-blue-100">
                                <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                  <FiUser className="text-blue-500" />
                                  <span>My Profile</span>
                                </button>
                                <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                  <FiHeart className="text-pink-500" />
                                  <span>Wishlists</span>
                                </button>
                                <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                  <FiStar className="text-amber-500" />
                                  <span>Rewards</span>
                                </button>
                                <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                  <FiSettings className="text-gray-500" />
                                  <span>Settings</span>
                                </button>
                                <button
                                  onClick={handleLogout}
                                  className="flex items-center gap-3 w-full p-4 text-red-600 hover:bg-red-100 transition-colors border-t border-blue-100"
                                >
                                  <FiLogOut className="text-red-500" />
                                  <span>Sign Out</span>
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <p className="font-medium mb-3 text-gray-700">Sign in to access exclusive deals</p>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => openAuthModal('auth')}
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 px-4 rounded-lg text-sm font-medium shadow-md"
                          >
                            Sign In
                          </button>
                          <button className="border border-blue-500 text-blue-600 py-2.5 px-4 rounded-lg text-sm font-medium" onClick={() => openAuthModal('auth')}>
                            Create Account
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Menu Items */}
                  <nav className="flex flex-col gap-2">
                    {navList.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-xl text-lg transition-all ${pathname === item.href
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                          : "hover:bg-blue-50 text-gray-700"
                          }`}
                      >
                        <span className={`${pathname === item.href ? "text-white" : "text-blue-600"}`}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Mobile Sidebar - Fixed Scrollable Content */}
              <AnimatePresence>
                {isOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                      onClick={() => setIsOpen(false)}
                    />
                    <motion.div
                      id="navbar-menu"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "tween", ease: "easeInOut" }}
                      className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-200 flex flex-col"
                    >
                      {/* Fixed Header */}
                      <div className="flex-shrink-0 p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <Image
                            src={logo}
                            alt="TravelHub Logo"
                            width={120}
                            height={40}
                            className="rounded-lg"
                            priority
                          />
                          <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Close menu"
                          >
                            <FiX className="w-6 h-6" />
                          </button>
                        </div>
                      </div>

                      {/* Scrollable Content Area - Now includes everything */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                          {/* My Trip Button - Mobile */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 mb-6 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md w-full"
                          >
                            <FiBriefcase className="w-5 h-5" />
                            <span className="font-medium">My Trip</span>
                          </motion.button>

                          {/* Auth Section - Mobile with Dropdown */}
                          <div className="mb-6">
                            {isLoggedIn ? (
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 overflow-hidden">
                                {/* User Info with Dropdown Toggle */}
                                <button
                                  onClick={() => setMobileUserMenuOpen(!mobileUserMenuOpen)}
                                  className="flex items-center justify-between w-full p-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white">
                                      <FiUser className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                      <p className="font-semibold text-gray-800">Welcome back!</p>
                                      <p className="text-sm text-gray-600">user@example.com</p>
                                    </div>
                                  </div>
                                  {mobileUserMenuOpen ? (
                                    <FiChevronUp className="text-gray-500" />
                                  ) : (
                                    <FiChevronDown className="text-gray-500" />
                                  )}
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                  {mobileUserMenuOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="border-t border-blue-100">
                                        <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                          <FiUser className="text-blue-500" />
                                          <span>My Profile</span>
                                        </button>
                                        <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                          <FiHeart className="text-pink-500" />
                                          <span>Wishlists</span>
                                        </button>
                                        <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                          <FiStar className="text-amber-500" />
                                          <span>Rewards</span>
                                        </button>
                                        <button className="flex items-center gap-3 w-full p-4 text-gray-700 hover:bg-blue-100 transition-colors">
                                          <FiSettings className="text-gray-500" />
                                          <span>Settings</span>
                                        </button>
                                        <button
                                          onClick={handleLogout}
                                          className="flex items-center gap-3 w-full p-4 text-red-600 hover:bg-red-100 transition-colors border-t border-blue-100"
                                        >
                                          <FiLogOut className="text-red-500" />
                                          <span>Sign Out</span>
                                        </button>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                                <p className="font-medium mb-3 text-gray-700">Sign in to access exclusive deals</p>
                                <div className="flex flex-col gap-2">
                                  <button
                                    onClick={handleLogin}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 px-4 rounded-lg text-sm font-medium shadow-md"
                                  >
                                    Sign In
                                  </button>
                                  <button className="border border-blue-500 text-blue-600 py-2.5 px-4 rounded-lg text-sm font-medium">
                                    Create Account
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Menu Items */}
                          <nav className="flex flex-col gap-2 mb-6">
                            {navList.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 p-4 rounded-xl text-lg transition-all ${pathname === item.href
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                                  : "hover:bg-blue-50 text-gray-700"
                                  }`}
                              >
                                <span className={`${pathname === item.href ? "text-white" : "text-blue-600"}`}>
                                  {item.icon}
                                </span>
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </nav>

                          {/* Contact Section - Now scrollable instead of fixed */}
                          <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h3>
                            <div className="space-y-3">
                              <a
                                href="tel:+18449545425"
                                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg text-blue-600 font-medium hover:bg-blue-100 transition-colors"
                              >
                                <div className="p-2 bg-blue-100 rounded-full">
                                  <FiPhone className="text-blue-500" />
                                </div>
                                <span>+1 (844) 954-5425</span>
                              </a>

                              <a
                                href="https://wa.me/18449545425"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-green-600 font-medium hover:bg-green-100 transition-colors"
                              >
                                <div className="p-2 bg-green-100 rounded-full">
                                  <FaWhatsapp className="text-green-500" />
                                </div>
                                <span>WhatsApp</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* AuthModals Component - UPDATED */}
      <AuthModals
        isOpen={authModalOpen}
        defaultModal={authModalType}
        onClose={closeAuthModal}
      />
    </>
  );
};

export default Navbar;