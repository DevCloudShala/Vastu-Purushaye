import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import {WEB_IMAGE} from '../../data/index.js'

const services = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Vastu Consultation",
    description: "Expert recommendations for new or existing homes. Get personalized guidance to create a harmonious living space that aligns with Vastu principles."
  },
  {
    image: WEB_IMAGE.roombyroom,
    title: "Room-by-Room Vastu Tips",
    description: "Detailed guidance for every room in your home. Learn how to optimize each space for maximum positive energy and functionality."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Vastu for Prosperity",
    description: "Discover powerful Vastu arrangements that attract wealth and abundance. Transform your space into a magnet for prosperity."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Remedies Without Renovation",
    description: "Simple yet effective Vastu solutions that don't require major changes. Learn quick fixes to improve your space's energy."
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Modern Vastu Integration",
    description: "Seamlessly blend traditional Vastu principles with contemporary design. Create a modern space that honors ancient wisdom."
  }
];

const ServicesSection = () => {
  const totalCards = services.length;
  const isOdd = totalCards % 2 !== 0;

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
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Vastu solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                ${isOdd && index === totalCards - 1 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''}
              `}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;