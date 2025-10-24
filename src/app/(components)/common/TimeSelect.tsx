"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface TimeSelectProps {
  label: string;
  name: string;
  icon?: React.ReactNode;
  register?: any; // react-hook-form register
  error?: FieldError;
  options: string[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const TimeSelect: React.FC<TimeSelectProps> = ({
  label,
  name,
  icon,
  register,
  error,
  options,
  placeholder = "Select time",
  required = false,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className={clsx("relative w-full", className)}>
      {/* Floating Label */}
      <label
        htmlFor={name}
        className={clsx(
          "absolute left-11 text-gray-500 text-sm transition-all duration-200 pointer-events-none -top-2  bg-white px-1",
          focused || selected
            ? " text-blue-600"
            : ""
        )}
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      {/* Icon + Select */}
      <div
        className={clsx(
          "flex items-center border rounded-xl bg-white w-full px-4 py-2.5 shadow-sm transition-all duration-200",
          focused
            ? "border-blue-500 ring-2 ring-blue-200"
            : "border-gray-300",
          error && "border-red-500 ring-red-100"
        )}
      >
        {icon && (
          <div className="text-gray-500 absolute left-4 pointer-events-none">
            {icon}
          </div>
        )}

        <select
          id={name}
          {...(register ? register(name) : {})}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            "appearance-none w-full bg-transparent outline-none text-gray-800 cursor-pointer",
            icon ? "pl-8" : "pl-2"
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((time, i) => (
            <option key={i} value={time}>
              {time}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <div className="absolute right-4 text-gray-400 pointer-events-none">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 ml-1">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TimeSelect;
