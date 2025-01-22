import React from 'react';
import { motion } from 'framer-motion';
import type { Tip } from '../../data/vastuTips';

interface TipCardProps {
  tip: Tip;
}

const importanceColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${importanceColors[tip.importance]}`}>
          {tip.importance.charAt(0).toUpperCase() + tip.importance.slice(1)}
        </span>
      </div>
      <p className="text-gray-600">{tip.content}</p>
    </motion.div>
  );
};

export default TipCard;