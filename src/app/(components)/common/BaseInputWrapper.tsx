"use client";
import React from "react";
import clsx from "clsx";

interface BaseInputWrapperProps {
  label?: string;
  name: string;
  icon?: React.ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const BaseInputWrapper: React.FC<BaseInputWrapperProps> = ({
  label,
  name,
  icon,
  error,
  required = false,
  className = "",
  children
}) => {
  return (
    <div className={clsx("w-full group", className)}>
      {label && (
        <label 
          htmlFor={name}
          className={clsx(
            "block font-semibold mb-2 transition-colors duration-200",
            error ? "text-red-600" : "text-gray-700",
            "text-sm md:text-base"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {children}
      </div>

      {error && (
        <p className={clsx(
          "mt-2 text-sm font-medium flex items-center",
          "transition-all duration-200 animate-fadeIn"
        )}>
          <span className="text-red-600">⚠ {error}</span>
        </p>
      )}
    </div>
  );
};

export default BaseInputWrapper;