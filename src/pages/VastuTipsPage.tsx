import React from 'react';
import { motion } from 'framer-motion';
import CategorySection from '../components/tips/CategorySection';
import { vastuTipCategories } from '../data/vastuTips';

const VastuTipsPage = () => {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Essential Vastu Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guidance to create harmony and positive energy in your living spaces
          </p>
        </motion.div>

        {vastuTipCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </motion.div>
    </div>
  );
};

export default VastuTipsPage;