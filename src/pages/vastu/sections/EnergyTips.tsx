import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Paintbrush, Sprout } from 'lucide-react';

const EnergyTips = () => {
  const tips = [
    {
      text: "Declutter your space to ensure free energy flow.",
      image: "https://images.unsplash.com/photo-1580656608731-46f1b20d9933?auto=format&fit=crop&w=500&q=80"
    },
    {
      text: "Optimize light and ventilation for positivity.",
      image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&w=500&q=80"
    },
    {
      text: "Balance colors to correspond with each element.",
      image: "https://images.unsplash.com/photo-1519781542704-957ff19eff00?auto=format&fit=crop&w=500&q=80"
    },
    {
      text: "Add indoor plants like bamboo or money plants for health and prosperity.",
      image: "https://images.unsplash.com/photo-1582061448246-cb2a0cfd7a5c?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            How to Achieve Energy Balance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical steps to align your space with the principles of Vastu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
            >
              <img src={tip.image} alt="Tip" className="w-full h-32 object-cover" />
              <div className="p-6">
                <p className="text-lg text-gray-700">{tip.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EnergyTips;