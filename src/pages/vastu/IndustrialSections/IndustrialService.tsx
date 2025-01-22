import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../../../components/ui/ServiceCard';
const services = [
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Factory Layout Planning",
    description: "Ideal placement for machinery, raw materials, and finished goods."
  },
  {
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Warehouse Vastu",
    description: "Optimize storage spaces for better inventory management."
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Energy Flow Enhancement",
    description: "Ensure proper energy circulation throughout the facility."
  },
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Remedies for Existing Units",
    description: "Implement corrective measures without structural changes."
  },
  {
    image: "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Industry-Specific Guidance",
    description: "Tailored solutions for manufacturing units, textile mills, food processing plants, and more."
  }
];


const IndustrialService = () => {
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

export default IndustrialService;




