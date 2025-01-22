import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Solution } from '../../data/solutions';

interface SolutionCardProps {
  solution: Solution;
  onOpen: (solution: Solution) => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onOpen }) => {
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onOpen(solution)}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-amber-50 rounded-lg">
            <Icon className="h-8 w-8 text-amber-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
          </div>
        </div>
        <p className="text-gray-600">{solution.description}</p>
        <div className="flex items-center justify-between pt-5">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>  
      </div>
      
    </motion.div>
  );
};

export default SolutionCard;
