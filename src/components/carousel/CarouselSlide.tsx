import React from 'react';
import { motion } from 'framer-motion';
import type { CarouselImage } from './CarouselData';

interface CarouselSlideProps {
  image: CarouselImage;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 1.1,
        zIndex: isActive ? 1 : 0
      }}
      transition={{ duration: 0.7 }}
      className="absolute inset-0"
    >
      <div className="relative w-full h-full">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-16 left-8 right-8 text-white"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">{image.title}</h2>
          <p className="text-xl text-gray-200">{image.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarouselSlide;