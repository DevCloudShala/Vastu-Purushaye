import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../../../components/ui/ServiceCard';

const services = [
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Retail Store Vastu",
    description: "Layouts and placements to attract customers and boost sales."
  },
  {
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Showroom Vastu",
    description: "Strategies to enhance visibility and profitability."
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Office Vastu",
    description: "Optimize workspaces for better decision-making and team performance."
  },
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Industrial Vastu",
    description: "Ideal placements for machinery, raw materials, and operations."
  },
  {
    image: "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Hospitality Vastu",
    description: "Energy-aligned spaces for restaurants, hotels, and resorts."
  },
  {
    image: "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "⁠Commercial Space Remedies",
    description: "Easy fixes for existing structures without major alterations."
  }
];

const CommercialService = () => {
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
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Vastu solutions for your workplace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialService;


