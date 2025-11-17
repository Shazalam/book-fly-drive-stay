"use client";

import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import Button from "../common/Button";
import MobileDrawer from "../common/MobileDrawer";
import CoreRentalForm from "../forms/CarRentalForm";
import { CarRentalFormValues } from "@/app/(types)/CarRentalSchema";
import { motion } from "framer-motion";

const CarRentalSearchBlock = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFormSubmit = (data: CarRentalFormValues) => {
    alert(`Searching cars from ${data.pickupLocation} to ${data.dropoffLocation || data.pickupLocation}`);

    // Close the drawer on successful mobile submission
    if (isDrawerOpen) setIsDrawerOpen(false);
  };

  return (
    <div className="w-full">
      {/* Desktop/Tablet View */}
      <div className="hidden md:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60">
          <CoreRentalForm onSubmit={handleFormSubmit} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            label="Search Car Rentals"
            iconLeft={<FaCar className="text-white" />}
            onClick={() => setIsDrawerOpen(true)}
            className="w-full !py-4 !text-lg font-semibold !rounded-2xl !shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              border: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="bottom"
        size="full"
        className="rounded-t-3xl"
      >
        <div className="p-4 pb-8">
          <CoreRentalForm onSubmit={handleFormSubmit} isMobile />
        </div>
      </MobileDrawer>
    </div>
  );
};

export default CarRentalSearchBlock;
