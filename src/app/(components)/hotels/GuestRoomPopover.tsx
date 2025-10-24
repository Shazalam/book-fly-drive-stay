// components/forms/GuestRoomPopover.tsx

"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaMinus, FaPlus, FaUsers } from 'react-icons/fa';
import Button from '../common/Button'; // Assuming Button component

interface GuestRoomPopoverProps {
  initialValues: { rooms: number; adults: number; children: number };
  onApply: (details: { rooms: number; adults: number; children: number }) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

// Counter Utility Component
const Counter: React.FC<{ label: string; count: number; onUpdate: (newCount: number) => void; min: number }> = ({ label, count, onUpdate, min }) => {
  const primaryBlue = 'var(--primary-blue)';
  const primaryBlueDark = 'var(--primary-blue-dark)';

  const decrement = () => onUpdate(Math.max(min, count - 1));
  const increment = () => onUpdate(count + 1);

  const buttonClasses = (disabled: boolean) => `p-2 rounded-full border transition-colors 
    ${disabled 
      ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
      : 'border-primary-blue text-primary-blue hover:bg-blue-50'
    }`;

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-900 font-semibold">{label}</span>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={count <= min}
          className={buttonClasses(count <= min)}
          style={{ borderColor: primaryBlue, color: primaryBlue }}
        >
          <FaMinus size={12} />
        </button>
        <span className="text-lg font-bold min-w-[20px] text-center">{count}</span>
        <button
          type="button"
          onClick={increment}
          className={buttonClasses(false)}
          style={{ borderColor: primaryBlue, color: primaryBlue }}
        >
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  );
};

// Main Popover Component
export const GuestRoomPopover: React.FC<GuestRoomPopoverProps> = ({ initialValues, onApply, isOpen, setIsOpen, isMobile }) => {
  const [rooms, setRooms] = useState(initialValues.rooms);
  const [adults, setAdults] = useState(initialValues.adults);
  const [children, setChildren] = useState(initialValues.children);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Sync internal state when external initialValues change
  useEffect(() => {
    setRooms(initialValues.rooms);
    setAdults(initialValues.adults);
    setChildren(initialValues.children);
  }, [initialValues]);

  const handleApply = () => {
    onApply({ rooms, adults, children });
    setIsOpen(false);
  };

  // --- Mobile Drawer/Modal Logic (Custom implementation) ---
  const mobileDrawerClasses = `fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
    ${isOpen ? 'translate-y-0' : 'translate-y-full'} rounded-t-2xl`;
  
  const desktopPopoverClasses = `absolute top-full right-0 mt-2 p-6 bg-white shadow-xl z-30 transition-opacity duration-200 origin-top-right
    ${isOpen ? 'block opacity-100' : 'hidden opacity-0'} rounded-lg min-w-[300px] max-w-[350px] hidden md:block`;

  // Handle outside click for desktop popover
  useEffect(() => {
    if (!isMobile && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, isMobile, setIsOpen]);

  // General content for both desktop popover and mobile drawer
  const content = (
    <>
      <Counter 
        label="Rooms" 
        count={rooms} 
        onUpdate={setRooms} 
        min={1} 
      />
      <Counter 
        label="Adults" 
        count={adults} 
        onUpdate={setAdults} 
        min={1} 
      />
      <Counter 
        label="Children" 
        count={children} 
        onUpdate={setChildren} 
        min={0} 
      />
      
      <p className="text-xs text-gray-500 mt-4 mb-3">
        Add your child's age at check-in for the best deals and assistance. Each hotel has unique policies.
      </p>

      <Button 
        label="Done" 
        onClick={handleApply} 
        className="w-full !py-2 font-bold"
        style={{ backgroundColor: 'var(--primary-blue)', borderRadius: 'var(--radius-sm)' }}
      />
    </>
  );

  return (
    <>
      {/* 1. Desktop Popover */}
      <div 
        ref={popoverRef} 
        className={desktopPopoverClasses}
        style={{ boxShadow: 'var(--shadow-xl)', borderRadius: 'var(--radius-lg)' }}
      >
        {content}
      </div>

      {/* 2. Mobile Drawer/Modal */}
      {isMobile && (
        <>
          {/* Backdrop for Mobile */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-60 z-40 md:hidden"
              onClick={handleApply} // Clicking backdrop auto-applies/closes
            ></div>
          )}
          <div className={mobileDrawerClasses} style={{ height: 'auto', maxHeight: '80vh' }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-100 pb-2">Guests and Rooms</h3>
            {content}
          </div>
        </>
      )}
    </>
  );
};