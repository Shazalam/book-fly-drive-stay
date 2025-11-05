"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

const CruiseCTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900 relative overflow-hidden">
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
            Ready to Set{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Sail?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-2xl mx-auto">
            Let our cruise specialists find your perfect voyage. Contact us today to start planning.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+18449545425"
              className="group flex items-center gap-3 bg-white text-cyan-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
            >
              <FiPhone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>+1 (844) 954-5425</span>
            </a>

            <a
              href="mailto:cruise@bookflydrivestay.com"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <FiMail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Trust Badge */}
          <p className="mt-12 text-cyan-200 text-sm">
            ⚓ No hidden fees • Best rate guarantee • Expert service
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CruiseCTA;
