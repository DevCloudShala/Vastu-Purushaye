import React from 'react';
import { motion } from 'framer-motion';

const DirectionHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Compass and map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl font-serif font-bold mb-6">
            Vastu Direction Guidance: Align Your Space for Success
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            In Vastu Shastra, each direction holds unique energy and governs specific aspects of life. 
            Learn how to harness the power of directions to create harmony and prosperity in your space.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Explore Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectionHero;