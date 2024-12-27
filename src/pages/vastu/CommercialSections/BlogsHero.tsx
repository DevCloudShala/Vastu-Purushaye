import React from 'react';
import { motion } from 'framer-motion';

const BlogsHero = ({bgImage,title, description}) => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={bgImage}
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
          {title}
          </h1>
          <p className="lg:text-2xl text-xl text-gray-200 mb-8">
         {description}
          </p>
          <motion.a
          href='/contact'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Schedule Consultation
          </motion.a>
          
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsHero;


