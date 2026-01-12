"use client";
import React from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: string | FieldError;
  required?: boolean;
  variant?: "default" | "modern" | "priceline";
  inputSize?: "sm" | "md" | "lg";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  error,
  icon,
  iconRight,
  required,
  className = "",
  variant = "priceline",
  inputSize = "md",
  ...rest
}) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  // Use padding for vertical alignment instead of fixed height
  const sizeClasses = {
    sm: "py-2 text-sm",
    md: "py-3 text-sm",
    lg: "py-3.5 text-base",
  };

  const variantClasses = {
    default:
      "border border-gray-300 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all",
    priceline:
      "border-2 border-gray-200 bg-white rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300",
    modern:
      "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg focus:border-blue-600 focus:bg-white focus:ring-0 transition-colors",
  };

  return (
    <div className={clsx("flex flex-col text-left ", className)}>
      {label && (
        <label
          htmlFor={rest.name}
          className="mb-1 text-xs sm:text-sm font-medium text-gray-800"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-base pointer-events-none">
            {icon}
          </span>
        )}

        <input
          id={rest.name}
          type={type}
          className={clsx(
            "w-full placeholder-gray-500 px-3 sm:px-4 focus:outline-none",
            icon && "pl-9 sm:pl-10",
            iconRight && "pr-9 sm:pr-10",
            variantClasses[variant],
            sizeClasses[inputSize],
            errorMessage &&
              "border-red-400 focus:border-red-500 focus:ring-red-200",
            rest.disabled && "opacity-60 cursor-not-allowed bg-gray-100"
          )}
          autoComplete={rest.autoComplete}
          {...rest}
        />

        {iconRight && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base cursor-pointer">
            {iconRight}
          </span>
        )}
      </div>

      {errorMessage && (
        <p className="mt-1 text-xs sm:text-[13px] text-red-500 leading-snug">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
