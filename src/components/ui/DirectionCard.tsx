import React from 'react';
import { motion } from 'framer-motion';

interface DirectionCardProps {
  image: string;
  title: string;
  deity: string;
  description: string;
  color: string;
  delay?: number;
}

const DirectionCard: React.FC<DirectionCardProps> = ({
  image,
  title,
  deity,
  description,
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="text-sm font-medium text-amber-600">
            {deity}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default DirectionCard;