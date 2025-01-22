

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import type { Solution } from './solutions'; // Import Solution type from solutions.ts

interface SolutionDialogProps {
  solution: Solution | null;
  onClose: () => void;
}

const variants = {
  hidden: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

const SolutionDialog: React.FC<SolutionDialogProps> = ({ solution, onClose }) => {
  if (!solution) return null;

  const renderIcon = () => {
    if (solution.icon) {
      return <solution.icon className="h-8 w-8 text-amber-600" />;
    }
    return null;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto p-6 relative shadow-lg" 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-amber-50 rounded-lg">{renderIcon()}</div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{solution.description}</p>

        <section aria-labelledby="benefits">
          <h4 className="font-medium text-gray-900 mb-2" id="benefits">
            Key Benefits:
          </h4>
          <ul className="space-y-2 mb-6">
            {solution.keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="features">
          <h4 className="font-medium text-gray-900 mb-2" id="features">
            What's Included:
          </h4>
          {solution?.whatIsIncluded?.map((section, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-medium text-gray-800">{section?.heading}</h5>
              <ul className="space-y-2 ml-4"> 
                {section.subheadings.map((subheading, subIndex) => (
                  <li key={subIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{subheading[0]}</span> 
                    <span className="text-gray-600">{subheading[1]?subheading[1]:null}</span> 
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="details">
          <h4 className="font-medium text-gray-900 mb-2" id="details">
            Details:
          </h4>
          <p className="text-gray-600 mb-4">{solution.detailedDescription}</p>
        </section>

        <div className="flex justify-end mt-6">
          <motion.a href='/contact' className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Now
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionDialog;