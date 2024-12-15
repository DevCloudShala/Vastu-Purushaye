import React from 'react';
import { Home, Building2, Compass, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "Home Vastu",
    description: "Create a harmonious living space that promotes peace and prosperity for you and your family."
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Office Vastu",
    description: "Optimize your workplace for success, growth, and positive employee relationships."
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Direction Guidance",
    description: "Learn about the significance of directions and their impact on different aspects of life."
  },
  {
    icon: <Sun className="h-8 w-8" />,
    title: "Energy Balance",
    description: "Achieve perfect harmony between the five elements for enhanced well-being."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Vastu Solutions for Every Space
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how ancient Vastu principles can transform your living and working spaces into havens of positive energy and success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-amber-600 mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;