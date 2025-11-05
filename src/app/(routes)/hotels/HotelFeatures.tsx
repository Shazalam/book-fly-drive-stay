"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiStar, FiShield, FiHeart } from "react-icons/fi";

const HotelFeatures = () => {
  const features = [
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Handpicked Properties",
      description: "Every hotel is personally vetted for quality, location, and guest experience.",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Best Rate Guarantee",
      description: "We search across platforms to ensure you get the most competitive rates available.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Secure Reservations",
      description: "Your booking details are handled with professional care and complete confidentiality.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Personalized Service",
      description: "Custom recommendations based on your preferences, budget, and travel style.",
      gradient: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
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
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hotel Service
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert hotel reservations with personalized care and attention to detail
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Decorative Element */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;
