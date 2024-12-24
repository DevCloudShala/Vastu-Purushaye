import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { carouselImages } from './CarouselData';
import CarouselSlide from './CarouselSlide';
import CarouselIndicators from './CarouselIndicators';

const AUTOPLAY_INTERVAL = 5000;

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {carouselImages.map((image, index) => (
        <CarouselSlide
          key={image.id}
          image={image}
          isActive={index === currentIndex}
        />
      ))}

      {/* Navigation Buttons */}
      <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Indicators */}
      <CarouselIndicators 
        total={carouselImages.length}
        current={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
};

export default ImageCarousel;