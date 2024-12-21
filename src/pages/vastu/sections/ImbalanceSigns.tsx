import React from 'react';
import { motion } from 'framer-motion';

const ImbalanceSigns = () => {
    const signs = [
      {
        text: "Frequent health issues or stress.",
        image: "https://images.unsplash.com/photo-1526481280692-3d70df0c1d52?auto=format&fit=crop&w=500&q=80"
      },
      {
        text: "Financial instability or stagnation.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
      },
      {
        text: "Poor relationships or lack of communication.",
        image: "https://images.unsplash.com/photo-1524156868115-dae4e8efade6?auto=format&fit=crop&w=500&q=80"
      },
      {
        text: "Feeling restless or unproductive.",
        image: "https://images.unsplash.com/photo-1542223616-ef5ffcefcb08?auto=format&fit=crop&w=500&q=80"
      }
    ];
  
    return (
      <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Signs of Energy Imbalance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indicators that your space needs realignment and balance.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signs.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
              >
                <img src={sign.image} alt="Sign" className="w-full h-32 object-cover" />
                <div className="p-6">
                  <p className="text-lg text-gray-700">{sign.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ImbalanceSigns;
