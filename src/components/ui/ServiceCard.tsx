import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 text-xl  items-center text-center mb-6">{description}</p>
        <div className="mt-auto">
          <motion.a href='/contact'
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            Get Service
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;