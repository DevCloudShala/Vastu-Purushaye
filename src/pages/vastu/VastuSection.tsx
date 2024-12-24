import React from 'react'
import {WEB_IMAGE} from '../../data/index.js'
import { motion } from "framer-motion";
const VastuSection = () => {
    const vastuReasons = [
      {
        title: "Promotes Positive Energy",
        text: "Aligning spaces with natural forces like sunlight and magnetic fields to promote positive energy.",
        image: WEB_IMAGE.om
      },
      {
        title: "Improves Health and Well-being",
        text: "Ensures a balanced flow of energy for better physical and mental health.",
        image: WEB_IMAGE.Health
      },
      {
        title: "Enhances Prosperity",
        text: "Removes obstacles to attract financial stability and wealth.",
        image: WEB_IMAGE.EnhanceP
      },
      {
        title: "Supports Mental Peace and Harmony",
        text: "Encourages harmonious relationships and reduces stress.",
        image: WEB_IMAGE.peace
      }
    ];
  
    return (
      <section className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className=" md:text-5xl text-3xl font-serif font-bold text-gray-900 mb-4">
              What is Vastu ?
            </h2>
            <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
              Vastu Shastra is an ancient Indian system of architecture and design that creates harmonious living spaces.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vastuReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
              >
                <img src={reason.image} alt="Reason" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default VastuSection;