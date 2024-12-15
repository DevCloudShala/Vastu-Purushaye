import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Solution } from '../../data/solutions';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-amber-50 rounded-lg">
            <Icon className="h-8 w-8 text-amber-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
            <p className="text-sm text-gray-500">{solution.duration}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{solution.description}</p>

        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-gray-900">Key Benefits:</h4>
          <ul className="space-y-2">
            {solution.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-medium text-gray-900">What's Included:</h4>
          <ul className="space-y-2">
            {solution.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{solution.price}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;