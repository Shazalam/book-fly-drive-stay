"use client";
import React from "react";
import clsx from "clsx";
import BaseInputWrapper from "./BaseInputWrapper";

interface InputFieldProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "priceline" | "modern";
  size?: "sm" | "md" | "lg";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  icon,
  onChange,
  onBlur,
  type = "text",
  error,
  required = false,
  className = "",
  disabled = false,
  variant = "priceline",
  size = "md"
}) => {
  // Size classes
  const sizeClasses = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg"
  };

  // Variant styles
  const variantClasses = {
    default: clsx(
      "border border-gray-300 bg-white rounded-lg",
      "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      "transition-all duration-200",
      error && "border-red-500 focus:border-red-500 focus:ring-red-200"
    ),
    priceline: clsx(
      "border-2 border-gray-200 bg-white rounded-xl",
      "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
      "shadow-sm hover:shadow-md transition-all duration-300",
      "hover:border-gray-300",
      error && "border-red-400 focus:border-red-500 focus:ring-red-100"
    ),
    modern: clsx(
      "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg",
      "focus:border-blue-600 focus:bg-white focus:ring-0",
      "transition-colors duration-200",
      error && "border-red-500 focus:border-red-500"
    )
  };

  return (
    <BaseInputWrapper
      label={label}
      name={name}
      icon={icon}
      error={error}
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
          className={clsx(
            "w-full outline-none text-gray-900 placeholder-gray-500 bg-transparent",
            "px-4 font-medium",
            sizeClasses[size],
            variantClasses[variant],
            disabled && "opacity-50 cursor-not-allowed bg-gray-100",
            icon && "pl-12" // Add extra padding when icon is present
          )}
        />
        
        {/* Enhanced Icon Container */}
        {icon && (
          <div className={clsx(
            "absolute left-0 top-0 bottom-0 flex items-center justify-center",
            size === "sm" ? "w-8" : "w-12"
          )}>
            <span className={clsx(
              "transition-colors duration-200",
              error ? "text-red-500" : "text-gray-500",
              disabled && "text-gray-400"
            )}>
              {icon}
            </span>
          </div>
        )}

        {/* Focus indicator dot for priceline variant */}
        {variant === "priceline" && (
          <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-0 transition-opacity duration-200 group-focus-within:opacity-100">
            <div className={clsx(
              "w-1 h-1 rounded-full",
              error ? "bg-red-500" : "bg-blue-600"
            )} />
          </div>
        )}
      </div>
    </BaseInputWrapper>
  );
};

export default InputField;