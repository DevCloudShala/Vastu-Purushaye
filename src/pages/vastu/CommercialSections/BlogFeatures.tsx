import React from 'react';
import { motion } from 'framer-motion';

const BlogFeatures = ({ features, vastuType, descriptionH2, bgImage }) => {
  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Apply the background image dynamically */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Why Choose {vastuType} Vastu?
          </h2>
          <p className="text-lg text-gray-700">{descriptionH2}</p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <h3 className="text-xl lg:text-4xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-xl text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFeatures;
