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

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiPhone,
  FiUser,
  FiLogOut,
  FiSettings,
  FiHeart,
  FiStar,
  FiBriefcase,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import AuthModals from "../AuthModal/AuthModal";

const navList = [
  { name: "Home", href: "/", icon: <FiHome className="w-5 h-5" /> },
  { name: "Cars", href: "/car-rentals", icon: <RiCarLine className="w-5 h-5" /> },
  { name: "Flights", href: "/flights", icon: <IoAirplaneOutline className="w-5 h-5" /> },
  { name: "Hotels", href: "/hotels", icon: <HiOutlineBuildingOffice2 className="w-5 h-5" /> },
  { name: "Cruise", href: "/cruise", icon: <RiShipLine className="w-5 h-5" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<"auth" | "find-my-trip" | null>(null);

  useEffect(() => {
    const loggedIn =
      typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(Boolean(loggedIn));
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setUserMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const openAuthModal = (type: "auth" | "find-my-trip") => {
    setAuthModalType(type);
    setAuthModalOpen(true);
    setIsOpen(false);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthModalType(null);
  };

  const NavLink = ({ item }: { item: typeof navList[0] }) => {
    const active = pathname === item.href;
    return (
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 relative group ${
          active
            ? "text-white"
            : "text-gray-700 hover:text-emerald-600"
        }`}
        aria-current={active ? "page" : undefined}
      >
        {/* Background for active state */}
        {active && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg"
            layoutId="activeNav"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        
        <span className={`relative z-10 transition-colors duration-300 ${
          active ? "text-white" : "text-emerald-600 group-hover:text-emerald-700"
        }`}>
          {item.icon}
        </span>
        <span className="hidden md:inline relative z-10">{item.name}</span>

        {/* Hover effect */}
        {!active && (
          <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10" />
        )}
      </Link>
    );
  };

  // Custom Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-0.5">
            {/* Plane */}
            <div className="w-3 h-1 bg-white rounded-full transform -rotate-45"></div>
            {/* Car */}
            <div className="w-3 h-1 bg-white rounded-full"></div>
            {/* Building */}
            <div className="w-3 h-1.5 bg-white rounded-sm"></div>
          </div>
        </div>
        {/* Decorative dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          BookFlyDriveStay
        </span>
        <span className="text-xs text-gray-500 -mt-1">Travel & Booking</span>
      </div>
    </div>
  );

  // Mobile Logo Component (Simplified)
  const MobileLogo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <div className="w-2 h-0.5 bg-white rounded-full transform -rotate-45"></div>
          <div className="w-2 h-0.5 bg-white rounded-full"></div>
          <div className="w-2 h-1 bg-white rounded-sm"></div>
        </div>
      </div>
      <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
        BookFly
      </span>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100/30 py-3"
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="hidden lg:block">
                <Logo />
              </div>
              <div className="lg:hidden">
                <MobileLogo />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navList.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              
              {/* My Trip Button */}
              <button
                onClick={() => openAuthModal("find-my-trip")}
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-semibold"
              >
                <FiBriefcase className="w-4 h-4" />
                <span className="text-sm">My Trip</span>
              </button>

              {/* User Menu */}
              <div className="relative">
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => setUserMenuOpen((s) => !s)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <FiUser className="w-4 h-4" />
                      </div>
                      <span className="hidden lg:block text-sm font-medium">Account</span>
                    </button>

                    <AnimatePresence>
                      {userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-emerald-100/50 backdrop-blur-sm z-50"
                        >
                          {/* Header */}
                          <div className="p-4 border-b border-emerald-50 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-2xl">
                            <div className="font-semibold text-gray-900">Welcome back!</div>
                            <div className="text-sm text-emerald-600">user@example.com</div>
                          </div>
                          
                          {/* Menu Items */}
                          <div className="p-2 space-y-1">
                            {[
                              { icon: FiUser, label: "Profile", color: "text-emerald-600" },
                              { icon: FiHeart, label: "Wishlists", color: "text-pink-500" },
                              { icon: FiStar, label: "Rewards", color: "text-amber-500" },
                              { icon: FiSettings, label: "Settings", color: "text-gray-500" },
                            ].map((item, index) => (
                              <button
                                key={index}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                              >
                                <item.icon className={`w-4 h-4 ${item.color}`} />
                                <span>{item.label}</span>
                              </button>
                            ))}
                          </div>
                          
                          {/* Logout */}
                          <div className="p-2 border-t border-emerald-50">
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
                            >
                              <FiLogOut className="w-4 h-4" />
                              <span>Sign Out</span>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => openAuthModal("auth")}
                      className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-600 transition-all duration-300 font-semibold"
                    >
                      <FiUser className="w-4 h-4" />
                      <span className="text-sm">Sign In</span>
                    </button>
                    
                    {/* Mobile User Button */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="lg:hidden p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-sm hover:bg-emerald-100 transition-colors duration-200"
                      aria-label="Open menu"
                    >
                      <FiUser className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-sm hover:bg-emerald-100 transition-colors duration-200"
                aria-label="Open mobile menu"
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
              className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-emerald-100/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
                <MobileLogo />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-200"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 h-full overflow-y-auto">
                
                {/* My Trip Button */}
                <button
                  onClick={() => openAuthModal("find-my-trip")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg font-semibold mb-6"
                >
                  <FiBriefcase className="w-4 h-4" />
                  <span>My Trip</span>
                </button>

                {/* Navigation */}
                <nav className="space-y-2 mb-8">
                  {navList.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          active 
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg" 
                            : "text-gray-700 hover:bg-emerald-50"
                        }`}
                      >
                        <span className={active ? "text-white" : "text-emerald-600"}>
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* Contact Section */}
                <div className="space-y-4 pt-6 border-t border-emerald-100">
                  <a
                    href="tel:+18449545425"
                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <FiPhone className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">24/7 Support</div>
                      <div className="font-semibold">+1 (844) 954-5425</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/18449545425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="font-semibold">WhatsApp</div>
                  </a>
                </div>

                {/* Auth Section */}
                {!isLoggedIn && (
                  <div className="pt-6 border-t border-emerald-100">
                    <div className="text-sm text-gray-600 mb-4">Sign in for exclusive deals</div>
                    <div className="space-y-3">
                      <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => openAuthModal("auth")}
                        className="w-full py-3 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-200"
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModals
        isOpen={authModalOpen}
        defaultModal={authModalType}
        onClose={closeAuthModal}
      />
    </>
  );
}