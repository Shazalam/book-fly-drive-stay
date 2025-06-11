

// components/popularDestinations.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    name: "Miami Beach",
    image: "/miami-beach.avif"
  },
  {
    name: "New York City",
    image: "/nyc.avif"
  },
  {
    name: "Aspen",
    image: "/aspen-Hotels.jpeg"
  },
  {
    name: "Napa Valley",
    image: "/napa-hotels.jpeg"
  },
  {
    name: "Las Vegas",
    image: "/las-vegas-hotels.webp"
    },
  {
    name: "San Francisco",
    image: "/san-francisco.jpg"
      }
];

export default function PopularDestinations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Popular Destinations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Discover our most sought-after locations with exclusive hotel deals
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-64">
  <Image
    src={destination.image}
    alt={destination.name}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      
                <div className="flex justify-between items-center gap-4">
                  
                  <a
                    href="tel:+18449545425"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer flex-1 whitespace-nowrap"
                    onClick={(e) => {
                      // Fallback for desktop
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.preventDefault();
                        alert('Please call us at (844) 954-5425');
                      }
                    }}
                  >
                    <Phone className="h-5 w-5" />
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}