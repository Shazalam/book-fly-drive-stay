// BaseInputWrapper should be simple and not modify input props
"use client";
import React from "react";

interface BaseInputWrapperProps {
  label?: string;
  name: string;
  icon?: React.ReactNode;
  error?: string | undefined;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const BaseInputWrapper: React.FC<BaseInputWrapperProps> = ({
  label,
  name,
  error,
  required = false,
  className = "",
  children,
}) => {
  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {children}
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default BaseInputWrapper;