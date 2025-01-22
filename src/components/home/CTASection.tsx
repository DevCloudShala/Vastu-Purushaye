import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Wind, Compass } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Sun className="h-24 w-24 text-amber-600" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Moon className="h-24 w-24 text-amber-600" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Compass className="h-40 w-40 text-amber-600 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Wind className="h-24 w-24 text-amber-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Transform Your Home Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We believe that a well-aligned home leads to a well-balanced life. Start your journey toward positivity and prosperity with our expert guidance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Personalized Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;