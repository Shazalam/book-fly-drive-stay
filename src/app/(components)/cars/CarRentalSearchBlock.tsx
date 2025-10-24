// components/blocks/CarRentalSearchBlock.tsx

"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../common/Button";
import MobileDrawer from "../common/MobileDrawer";
import { CoreRentalForm } from "../forms/CarRentalForm";
import { CarRentalFormValues } from "@/app/(types)/CarRentalSchema";

const CarRentalSearchBlock = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFormSubmit = (data: CarRentalFormValues) => {
    console.log("🚗 Car Rental Data =>", data);
    alert(`Searching cars from ${data.pickupLocation} to ${data.dropoffLocation || data.pickupLocation}`);

    // Close the drawer on successful mobile submission
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  // The styling is updated to match the image's clean white card look
  return (
    <div className="max-w-6xl mb-8 px-4 sm:px-6 ">

      {/* Desktop/Tablet View */}
      <div
        className="hidden md:block "
        style={{
          borderRadius: 'var(--radius-xl)',
          // boxShadow: 'var(--shadow-xl)' 
        }}
      >
        {/* <h2 className="text-3xl font-heading font-bold mb-1" style={{ color: 'var(--primary-blue-dark)' }}>
          Search car rentals
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Find the best car rental deals
        </p> */}

        {/* Core Form for Desktop */}
        <CoreRentalForm onFormSubmit={handleFormSubmit} />
      </div>

      {/* Mobile View: Button to open the Drawer */}
      <div className="md:hidden">
        <Button
          label="Search Car Rentals"
          iconLeft={<FaSearch />}
          onClick={() => setIsDrawerOpen(true)}
          className="w-full !py-3 !text-lg !rounded-lg !shadow-lg"
          style={{ borderRadius: 'var(--radius-lg)' }}
        />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Booking Details"
  
      >
        <div className="space-y-4">
          {/* Core Form inside the Drawer (with isMobile prop) */}
          <CoreRentalForm onFormSubmit={handleFormSubmit} isMobile={true} />
        </div>
      </MobileDrawer>
    </div>
  );
};

export default CarRentalSearchBlock;