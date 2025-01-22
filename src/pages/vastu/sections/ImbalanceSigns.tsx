import React from 'react';
import { motion } from 'framer-motion';

const ImbalanceSigns = () => {
  const signs = [
    {
    text: "Frequent health issues or stress can be a critical indicator of energy imbalance in your environment. An unharmonious space can lead to chronic stress, disrupt sleep patterns, and weaken the immune system, making you more susceptible to illnesses. Factors like poor ventilation, cluttered spaces, or improper lighting could contribute to these issues by disrupting the natural flow of energy and affecting your overall well-being."
    },
    {
    text: "Financial instability or stagnation might stem from an imbalanced workspace or living area. According to Vastu principles, the placement of financial records and valuables in unfavorable directions can hinder income growth and financial opportunities. Negative energy flow may create obstacles in professional efforts, leading to a cycle of stagnation and financial unpredictability."
    },
    {
    text: "Poor relationships or lack of communication often arise from unbalanced or disorganized environments. When energy pathways are blocked, it can result in misunderstandings and emotional disconnect between individuals. Ensuring harmonious energy flow in social spaces and aligning communication areas with Vastu can foster better understanding, cooperation, and empathy among family or team members."
    },
    {
    text: "Feeling restless or unproductive is often tied to an unsettled environment. Spaces that are overcrowded or poorly arranged can make it challenging to focus and complete tasks efficiently. By aligning your workspace and living areas with principles of balance, you can enhance your ability to concentrate and achieve tasks with greater ease and satisfaction, ultimately improving both your personal and professional life."
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
                {/* <img src={sign.image} alt="Sign" className="w-full h-32 object-cover" /> */}
                <div className="p-6">
                  <p className="text-lg text-justify text-gray-700">{sign.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ImbalanceSigns;
