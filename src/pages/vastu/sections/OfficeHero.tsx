import React from 'react';
import { motion } from 'framer-motion';

const OfficeHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Modern office space"
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
            Office Vastu: Create a Workplace for Success
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Welcome to Vastu Purushaye, where we help you design workspaces that foster productivity, 
            creativity, and prosperity. By applying the principles of Vastu Shastra, you can align your 
            office environment with positive energies, enhancing employee well-being and business growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeHero;