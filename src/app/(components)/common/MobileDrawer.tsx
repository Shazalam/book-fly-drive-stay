// components/common/MobileDrawer.tsx (Enhanced UI)

import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const MobileDrawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, title }) => {
  
  // Custom radius variable for easy control and a professional look
  const customRadius = 'var(--radius-3xl, 24px)';

  return (
    <>
      {/* Backdrop (Darker and smoother transition) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer Panel: Slide from bottom, optimized for aesthetic and function */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-4/5 max-h-[80vh] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden 
          ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        style={{ 
          // Applying custom radius directly to the top corners
          borderTopLeftRadius: customRadius,
          borderTopRightRadius: customRadius,
        }}
      >
        {/* Header: Sticky, Clean, and Prominent */}
        <div 
          className="p-5 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white"
          style={{ 
            // Ensure the header background takes the full width and respects the top radii
            borderTopLeftRadius: customRadius,
            borderTopRightRadius: customRadius,
          }}
        >
          <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label={`Close ${title} drawer`}
          >
            <FaTimes size={22} />
          </button>
        </div>
        
        {/* Content Area: Padded and Scrollable */}
        {/* Adjusted height calculation for responsiveness and added smooth scrolling */}
        <div className="p-4 md:p-6 overflow-y-auto h-[calc(100%-70px)] custom-scrollbar">
          {children}
        </div>
      </div>
    </> 
  );
};

export default MobileDrawer;