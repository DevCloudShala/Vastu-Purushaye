import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WEB_IMAGE } from '../data/index.js';

const features = [
  {
    image:WEB_IMAGE.homeVastu,
    title: "Home Vastu",
    description: "Create a harmonious living space that promotes peace and prosperity for you and your family.",
    link: "/Home-vastu"
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Office Vastu",
    description: "Optimize your workplace for success, growth, and positive employee relationships.",
    link: "/office-vastu"
  },
  {
    image: WEB_IMAGE.commercialVastu,
    title: "Commercial Vastu",
    description: "Enhance business prosperity with specialized Vastu solutions for commercial spaces.",
    link: "/commercial-vastu"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Industrial Vastu",
    description: "Optimize industrial spaces for maximum productivity and success.",
    link: "/industrial-vastu"
  },
  {
    image: WEB_IMAGE.DirectionGuidance,
    title: "Direction Guidance",
    description: "Learn about the significance of directions and their impact on different aspects of life.",
    link: "/direction-guidance"
  },
  {
    image: WEB_IMAGE.energyBalance,
    title: "Energy Balance",
    description: "Discover the art of balancing the five elements that enhances well-being, success, and peace.",
    link: "/energy-balance"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">Vastu Solutions for Every Space .</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={feature.link} className="block group">
                <div className="space-y-6">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="inline-block">
                      <span className="text-gray-900 font-medium group-hover:text-amber-600 transition-colors inline-flex items-center">
                        Learn More 
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;