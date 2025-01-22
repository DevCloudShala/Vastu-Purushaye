import React from 'react';
import { motion } from 'framer-motion';
import { WEB_IMAGE } from '../../data/index.js';

const Process = () => {
  const processes = [
    {
      image: WEB_IMAGE.tothescale,
      title: "To-The-Scale Layout",
      description: "Floor Plan of the property"
    },
    {
      image: WEB_IMAGE.north,
      title: "North Direction Marking",
      description: "On the Layout Map"
    },
    {
      image: WEB_IMAGE.pinlocation,
      title: "Google Location",
      description: "Of the site"
    },
    {
      image: WEB_IMAGE.location,
      title: "Snapshot from Google Maps",
      description: "Highlighting the site"
    }
  ];

  return (
    <section className="relative py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 text-xl mb-3">Get your Vastu done</p>
          <h2 className="text-5xl font-bold">What We Need .</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square mb-6 overflow-hidden bg-gray-100">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                <div className="pt-2">
        
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-600 mb-3">We Make</p>
          <h2 className="text-4xl font-bold">Perfection .</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;