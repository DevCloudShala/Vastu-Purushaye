import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

export const AboutConsultant = () => {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 m-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-amber-600/10 rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-5xl font-bold font-sans text-gray-900 mb-2">Our Story</h2>
              <p className="text-lg text-amber-600 mb-6 font-sans">About the consultant</p>
              
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed font-sans">
                I have been dedicated to transforming spaces into havens of positivity, harmony, and prosperity. Since embarking on this journey in 2010, I have had the privilege of working with a diverse clientele across residential, commercial, and industrial sectors. My approach integrates traditional Vastu principles with contemporary design sensibilities, ensuring each project complements the modern lifestyle while staying true to its roots.
                </p>
                <p className="leading-relaxed font-sans">
                My Mission is
                to help individuals and businesses create spaces that foster peace, success, and growth by harmonizing energies effectively. I am committed to guiding you through a transformative journey that enriches both your personal and professional life.
                </p>
                
                <motion.a 
                href='/about'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 py-2 text-amber-600 border-b-2 border-amber-600 font-semibold 
                           hover:text-amber-700 hover:border-amber-700 transition-colors duration-300 inline-flex items-center"
                >
                  Read More →
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};