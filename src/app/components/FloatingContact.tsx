"use client";

import { useState, useEffect } from "react";
import { FaPhone, FaTimes, FaWhatsapp, FaComment } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setIsVisible(true);
        return;
      }
      if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 20 }}
            className="flex flex-col items-end gap-4"
          >
            {isOpen && (
              <>
                <motion.a
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  href="tel:+18449545425"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
                  aria-label="Call us"
                >
                  <FaPhone className="text-xl" />
                </motion.a>
                <motion.a
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  href="https://wa.me/18449545425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors"
                  aria-label="WhatsApp us"
                >
                  <FaWhatsapp className="text-2xl" />
                </motion.a>
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => alert("Live chat coming soon!")}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
                  aria-label="Live chat"
                >
                  <FaComment className="text-xl" />
                </motion.button>
              </>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center w-16 h-16 rounded-full shadow-xl ${
                isOpen ? "bg-red-500" : "bg-blue-600"
              } text-white transition-colors`}
              aria-label={isOpen ? "Close contact options" : "Contact us"}
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaPhone className="text-2xl animate-pulse" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingContact;