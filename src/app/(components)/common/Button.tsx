"use client";
import React, { forwardRef } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react"; // lightweight spinner icon

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger" | "outline" | "ghost";
  fullWidth?: boolean;
  size?: "lg" | "md" | "sm";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      iconLeft,
      iconRight,
      loading = false,
      variant = "primary",
      className = "",
      fullWidth = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "flex items-center justify-center gap-2 rounded-xl font-semibold py-3 px-6 text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300 disabled:bg-blue-300",
      secondary:
        "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300 disabled:bg-gray-400",
      success:
        "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300 disabled:bg-green-300",
      danger:
        "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 disabled:bg-red-300",
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-200 disabled:opacity-60",
      ghost:
        "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200 disabled:opacity-60",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          baseStyles,
          variants[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
        style={{
          // background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          border: 'none'
        }}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin w-5 h-5 text-white" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {iconLeft && <span className="text-lg">{iconLeft}</span>}
            {label || children}
            {iconRight && <span className="text-lg">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
