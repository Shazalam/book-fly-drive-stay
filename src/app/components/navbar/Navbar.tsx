"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import "../../styles/globals.css";
import logo from '../../../../public/logo.png'
import Image from "next/image";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Car Rentals",
    href: "/car-rentals",
  },
  {
    name: "Flights",
    href: "/flights",
  },
  {
    name: "Hotels",
    href: "/hotels",
  },
  // {
  //   name: "About us",
  //   href: "/about-us",
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest("#navbar-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="flex justify-center lg:hidden p-1.5  text-2xl bg-black text-white font-medium">
        <span className="px-2 pt-0.5 animate-[shake_0.9s_ease-in-out_infinite_alternate] ">
          <FaPhone />
        </span>
        <a href="tel:+1 (844) 954-5425" className="px-2">
          call now : +1 (844) 954-5425
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
        <Image src={logo} alt="logo" width={60}></Image>
       
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`hover:text-blue-700 font-semibold ${
                pathname === `${item.href}` ? "text-blue-700" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="hidden lg:block">
            <div className="flex cursor-pointer border-l-2 justify-center items-center">
              <span className="text-2xl p-2 animate-[shake_0.9s_ease-in-out_infinite_alternate]">
                <FaPhone className="text-blue-600" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs pl-1">
                  Call 24/7 for our best deals
                </span>
                <a
                  href="tel:+1 (844) 954-5425"
                  className="text-2xl text-blue-600 font-semibold"
                >
                  +1 (844) 954-5425
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        id="navbar-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-2xl mb-4"
          >
            <FiX />
          </button>

          {/* Mobile Menu Items */}
          <nav className="flex flex-col gap-4">
            {navList.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg text-lg ${
                  pathname === `/${item.href}`
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
