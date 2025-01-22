import React from "react";
import { motion } from "framer-motion";


const CommercialService = ({ImportantElementsCommercial,services}) => {
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
          <h2 className="text-3xl font-serif font-bold text-amber-600 mb-4">
            What We Offer
          </h2>
          <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto">
            Comprehensive Vastu solutions for you
          </p>
        </motion.div>

        <ul className="list-disc text-3xl list-inside space-y-8">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-800"
            >
              <strong className="text-3xl">{service.title}:</strong>{" "}
              <p className="text-xl">{service.description}</p>
              <ul className="list-disc list-inside mt-2">
                {service.bulletPoints.map((point, i) => (
                  <li key={i} className="mt-1 text-xl text-gray-600">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
        <section className="mt-10">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold text-amber-600 mb-4">
            {ImportantElementsCommercial.title}
          </h2>
          <ul className="list-disc text-3xl list-inside space-y-8">
            {ImportantElementsCommercial.elements.map((element, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-800"
              >
                <strong className="text-3xl">{element.heading}:</strong>{" "}
                <p className="text-xl">{element.details}</p>
                <ul className="list-disc list-inside mt-2"></ul>
              </motion.li>
            ))}

          </ul>
        </section>
      </div>
    </section>
  );
};

export default CommercialService;
