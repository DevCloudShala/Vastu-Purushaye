import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {WEB_IMAGE} from '../data/index.js'
import HeadingBorder from './HeadingBorder.tsx';
console.log(WEB_IMAGE)
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
  const totalCards = features.length;
  const isOdd = totalCards % 2 !== 0;

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className='flex flex-col justify-center mt-6 items-center'>

          <h2 className="text-5xl text-black font-serif font-bold ">
            Vastu Solutions for Every Space
          </h2>
          <HeadingBorder/>
          </div>
          
          <p className="text-gray-600 max-w-2xl text-xl mt-2 mx-auto">
            Discover how ancient Vastu principles can transform your living and working spaces into havens of positive energy and success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${isOdd && index === totalCards - 1 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''}
              `}
            >
              <Link to={feature.link} className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="mt-4">
                      <span className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
                        Learn More →
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