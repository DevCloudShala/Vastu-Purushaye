import React from 'react';
import { motion } from 'framer-motion';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ title, description, buttonText }) => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;