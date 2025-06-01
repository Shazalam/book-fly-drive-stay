"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPhoneAlt, FaStar, FaCheckCircle, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const DialogBox = () => {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <div></div>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[500px] mx-auto p-0 overflow-hidden border-0 rounded-lg shadow-xl">
        {/* Close button - positioned for all screens */}
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="absolute right-2 top-2 p-2 rounded-full h-auto w-auto z-50"
            aria-label="Close"
          >
            <FaTimes className="text-gray-500 hover:text-gray-700 text-lg sm:text-xl transition-colors" />
          </Button>
        </DialogClose>

        {/* Header with gradient background */}
        <DialogHeader className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 sm:p-6 text-center relative">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <FaStar className="text-yellow-300 animate-pulse text-sm sm:text-base" />
              MAKE YOUR TRAVEL SIMPLE
              <FaStar className="text-yellow-300 animate-pulse text-sm sm:text-base" />
            </DialogTitle>
            <DialogDescription className="text-white/90 mt-1 sm:mt-2 text-sm flex items-center justify-center  sm:text-base">
              Best Price Assurance by Book-Fly-Drive-Stay
            </DialogDescription>
          </motion.div>
        </DialogHeader>

        {/* Main content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-white">
          {/* Discount offer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
                Exclusive Discounts Up To 50% OFF
              </span>
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Limited time offers available only through our travel experts
            </p>
            
            <motion.a
              href="tel:+18449545425"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="text-base sm:text-lg" />
              <div className="text-left">
                <div className="text-xs sm:text-sm font-medium">Click to Call Now</div>
                <div className="text-sm sm:text-lg font-bold">+1 (844) 954-5425</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Benefits list */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2 sm:space-y-3"
          >
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-green-500 text-base sm:text-xl flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-green-500 text-base sm:text-xl flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-green-500 text-base sm:text-xl flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base">Instant Booking Confirmation</span>
            </div>
          </motion.div>

          {/* Special note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-r-lg"
          >
            <p className="font-medium text-yellow-800 text-center text-xs sm:text-sm">
              <span className="font-bold">Note:</span> These exclusive offers are only available when you call our travel experts directly.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <DialogFooter className="bg-gray-50 p-3 sm:p-4 border-t border-gray-200 flex justify-center">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-100 text-sm sm:text-base"
            >
              Close Window
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;