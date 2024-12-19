import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Time-Tested Principles",
    description: "Based on centuries-old wisdom, our Vastu solutions are designed to align with modern lifestyles."
  },
  {
    image: "https://images.unsplash.com/photo-1600573472573-8b45bf1907fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Personalized Guidance",
    description: "Get customized advice for your home layout, interiors, and more."
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Holistic Well-Being",
    description: "Experience improved relationships, financial growth, and peace of mind by optimizing your home's energy flow."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Why Choose Home Vastu?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;