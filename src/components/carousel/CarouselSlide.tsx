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
        zIndex: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.7 }}
      className="absolute inset-0 w-full h-full"
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20,
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-8 left-4 right-4 text-white sm:bottom-12 sm:left-8 sm:right-8 lg:bottom-16 lg:left-16 lg:right-16"
        >
          <h2 className="text-lg font-serif font-bold mb-2 sm:text-2xl lg:text-4xl sm:mb-4 lg:mb-6">
            {image.title}
          </h2>
          <p className="text-sm text-gray-200 sm:text-base lg:text-lg">
            {image.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarouselSlide;
