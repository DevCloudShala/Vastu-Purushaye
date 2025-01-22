import React from 'react';
import { motion } from 'framer-motion';

const EnergyHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Peaceful zen garden"
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
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block bg-amber-600/90 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Harmony & Balance
          </motion.span>
          <h1 className="text-5xl font-serif font-bold mb-6">
            Energy Balance with Vastu: Create Harmony in Your Space
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the art of balancing the five elements—Earth, Water, Fire, Air, and Space—to create 
            a harmonious environment that enhances well-being, success, and peace.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Explore Elements
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnergyHero;