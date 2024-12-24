import React from 'react';
import { motion } from 'framer-motion';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ total, current, onSelect }) => {
  return (
    <div className="z-10 absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onSelect(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            current === index 
              ? 'bg-white w-8' 
              : 'bg-white/50 hover:bg-white/80'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;