import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import {WEB_IMAGE} from '../../data/index.js'
import HeadingBorder from '../HeadingBorder.tsx';

const services = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Vastu Consultation",
    description: "Receive expert guidance to harmonize your living space with Vastu principles, enhancing positive energy and well-being."
  },
  {
    image: WEB_IMAGE.roombyroom,
    title: "Room-by-Room Vastu Tips",
    description: "Get tailored advice for each room to optimize energy flow and functionality while ensuring a harmonious environment."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Vastu for Prosperity",
    description: "Discover proven Vastu strategies to attract wealth, success, and abundance into your home and life."
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Remedies Without Renovation",
    description: "Implement simple and effective Vastu remedies to enhance your space's energy without major structural changes."
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Modern Vastu Integration",
    description: "Combine timeless Vastu principles with modern design to create a space that balances tradition and contemporary aesthetics."
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
          <div className='flex justify-center items-center  flex-col'>

          <h2 className="text-5xl font-sans font-bold text-gray-900">
            What We Offer

          </h2>
            
          </div>


          <p className="text-gray-600 max-w-2xl md:text-xl text-xl mt-5 mx-auto">
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