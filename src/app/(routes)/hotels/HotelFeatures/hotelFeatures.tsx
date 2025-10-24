// components/hotelFeatures.tsx
'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Heart, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: "Best Price Guarantee",
    description: "Found a better price? We'll match it and give you an additional discount."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Free Cancellation",
    description: "Most hotels allow free cancellation up to 24 hours before check-in."
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Verified Reviews",
    description: "All reviews are from real guests who have stayed at the property."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-teal-500" />,
    title: "Secure Booking",
    description: "Your personal and payment information is always protected."
  }
];

export default function HotelFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Book With Us?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}