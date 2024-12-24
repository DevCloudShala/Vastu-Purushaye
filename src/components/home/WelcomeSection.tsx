import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from '../carousel/ImageCarousel.tsx';
import HeadingBorder from '../headingBorder.tsx';

const WelcomeSection = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center flex-col">

    <ImageCarousel />
      </div>
  );
};

export default WelcomeSection;