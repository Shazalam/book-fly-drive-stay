"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiSearch, FiCheckCircle, FiAnchor } from "react-icons/fi";

const CruiseServiceProcess = () => {
  const steps = [
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      number: "01",
      title: "Tell Us Your Vision",
      description: "Share your desired destination, travel dates, cabin preferences, and what matters most to you.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiSearch className="w-8 h-8" />,
      number: "02",
      title: "We Search & Compare",
      description: "Our cruise experts search multiple cruise lines to find the perfect itinerary and best value.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      number: "03",
      title: "Review Options",
      description: "We present carefully curated cruise options with detailed information about each voyage.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FiAnchor className="w-8 h-8" />,
      number: "04",
      title: "Book Your Voyage",
      description: "Once you approve, we handle all reservation details and secure your exclusive perks.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to your dream cruise vacation
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                {/* Number Badge */}
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CruiseServiceProcess;
