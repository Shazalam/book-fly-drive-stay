"use client";
import React from "react";
import clsx from "clsx";
import BaseInputWrapper from "./BaseInputWrapper";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string | FieldError | undefined;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "priceline" | "modern";
  size?: "sm" | "md" | "lg";
  maxLength?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  icon,
  iconRight,
  onChange,
  onBlur,
  type = "text",
  error,
  required = false,
  className = "",
  disabled = false,
  variant = "priceline",
  size = "md",
  maxLength
}) => {
  // Size classes
  const sizeClasses = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg"
  };

  // Convert FieldError to string for display
  const errorMessage = typeof error === 'string' ? error : error?.message;
  
  // Variant styles (emerald–teal themed)
  const variantClasses = {
    default: clsx(
      "border border-gray-300 bg-white rounded-lg",
      "focus:border-emerald-500 focus:ring-2 focus:ring-teal-200",
      "transition-all duration-200",
      errorMessage && "border-red-500 focus:border-red-500 focus:ring-red-200" // 👈 Use errorMessage here
    ),
    priceline: clsx(
      "border-2 border-gray-200 bg-white rounded-xl",
      "focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100",
      "shadow-sm hover:shadow-md transition-all duration-300",
      "hover:border-emerald-300",
      errorMessage && "border-red-400 focus:border-red-500 focus:ring-red-100" // 👈 Use errorMessage here
    ),
    modern: clsx(
      "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg",
      "focus:border-emerald-600 focus:bg-white focus:ring-0",
      "transition-colors duration-200",
      errorMessage && "border-red-500 focus:border-red-500" // 👈 Use errorMessage here
    ),
  };

  return (
    <BaseInputWrapper
      label={label}
      name={name}
      icon={icon}
      error={errorMessage}
      required={required}
      className={className}
    >
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
          className={clsx(
            "w-full outline-none text-gray-900 placeholder-gray-500 bg-transparent",
            "px-4 font-medium",
            sizeClasses[size],
            variantClasses[variant],
            disabled && "opacity-50 cursor-not-allowed bg-gray-100",
            icon && "pl-12",
            iconRight && "pr-12"
          )}
        />
        
        {/* Left Icon Container */}
        {icon && (
          <div className={clsx(
            "absolute left-0 top-0 bottom-0 flex items-center justify-center pointer-events-none",
            size === "sm" ? "w-8" : "w-12"
          )}>
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {icon}
            </span>
          </div>
        )}

        {/* Right Icon Container */}
        {iconRight && (
          <div className={clsx(
            "absolute right-0 top-0 bottom-0 flex items-center justify-center",
            size === "sm" ? "w-8" : "w-12"
          )}>
            {iconRight}
          </div>
        )}

        {/* Focus indicator dot for priceline variant */}
        {variant === "priceline" && (
          <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-0 transition-opacity duration-200 group-focus-within:opacity-100">
            <div className={clsx(
              "w-1 h-1 rounded-full",
              errorMessage ? "bg-red-500" : "bg-blue-600" // 👈 Use errorMessage here
            )} />
          </div>
        )}
      </div>
    </BaseInputWrapper>
  );
};

export default InputField;