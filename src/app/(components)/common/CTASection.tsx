"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

interface CTASectionProps {
  title: string;
  titleHighlight?: string;
  description: string;
  descriptionHighlight?: string;
  emailDisplay?: string;
  trustBadge?: string;
  trustIcon?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  highlightFrom?: string;
  highlightTo?: string;
  textColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonHoverBg?: string;
  shadowColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  titleHighlight,
  description,
  descriptionHighlight,
  emailDisplay = "Email Us",
  trustBadge,
  trustIcon = "✨",
  gradientFrom = "from-blue-900",
  gradientVia = "via-indigo-900",
  gradientTo = "to-purple-900",
  highlightFrom = "from-cyan-300",
  highlightTo = "to-blue-300",
  textColor = "text-blue-100",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-blue-900",
  buttonHoverBg = "hover:bg-blue-50",
  shadowColor = "hover:shadow-blue-500/50",
}) => {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} relative overflow-hidden`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span
                  className={`bg-gradient-to-r ${highlightFrom} ${highlightTo} bg-clip-text text-transparent`}
                >
                  {titleHighlight}
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className={`text-xl md:text-2xl ${textColor} mb-12 max-w-2xl mx-auto`}>
            {description}
            {descriptionHighlight && (
              <>
                {" "}
                <span className="text-white font-semibold">{descriptionHighlight}</span>
              </>
            )}
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`tel:+18449545425`}
              className={`group flex items-center gap-3 ${buttonBgColor} ${buttonTextColor} px-8 py-4 rounded-full font-bold text-lg ${buttonHoverBg} transition-all duration-300 shadow-2xl ${shadowColor} hover:scale-105`}
            >
              <FiPhone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>+1 (844) 954-5425</span>
            </a>

            <a
              href={`mailto:cruise@bookflydrivestay.com`}
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <FiMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>{emailDisplay}</span>
            </a>
          </div>

          {/* Trust Badge */}
          {trustBadge && (
            <p className={`mt-12 ${textColor} text-sm`}>
              {trustIcon} {trustBadge}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
