import React from 'react';
import { motion } from 'framer-motion';

const tips = [
  {
    title: "Balance Elements",
    description: "Align earth, water, fire, air, and space with their corresponding directions."
  },
  {
    title: "Avoid Clutter",
    description: "Keep all directions clean and organized to maintain proper energy flow."
  },
  {
    title: "Use Colors Wisely",
    description: "Choose colors that enhance the positive energy of each direction."
  },
  {
    title: "Regular Maintenance",
    description: "Periodically check and maintain the energy balance in each direction."
  }
];

const DirectionTips = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Vastu Tips for All Directions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these essential guidelines to maintain positive energy flow in your space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionTips;