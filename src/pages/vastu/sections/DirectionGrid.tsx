import React from 'react';
import { motion } from 'framer-motion';
import DirectionCard from '../../../components/ui/DirectionCard';

const directions = [
  {
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "North (Kubera)",
    deity: "Lord of Wealth",
    description: "Associated with prosperity and financial growth. Ideal for main entrances and cash storage.",
    color: "white"
  },
  {
    image: "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Northeast (Ishanya)",
    deity: "Lord Shiva",
    description: "Place of meditation and spiritual growth. Perfect for temples and prayer rooms.",
    color: "blue"
  },
  {
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "East (Indra)",
    deity: "Ruler of Health",
    description: "Direction of sunrise and positive energy. Ideal for main entrances and living rooms.",
    color: "yellow"
  },
  {
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Southeast (Agni)",
    deity: "Lord of Fire",
    description: "Associated with fire and energy. Best suited for kitchens and electrical equipment.",
    color: "red"
  },
  {
    image: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "South (Yama)",
    deity: "Lord of Strength",
    description: "Direction of stability and power. Good for heavy furniture and master bedrooms.",
    color: "blue"
  },
  {
    image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Southwest (Nairutya)",
    deity: "Stability",
    description: "Zone of stability and protection. Ideal for master bedrooms and heavy storage.",
    color: "brown"
  },
  {
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "West (Varuna)",
    deity: "Lord of Rain",
    description: "Associated with water and movement. Suitable for bathrooms and water storage.",
    color: "blue"
  },
  {
    image: "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Northwest (Vayu)",
    deity: "Lord of Wind",
    description: "Direction of air and movement. Good for guest rooms and storage areas.",
    color: "gray"
  }
];

const DirectionGrid = () => {
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
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Key Directions in Vastu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each direction in Vastu Shastra has its unique significance and energy. 
            Understanding these can help you create a more balanced and harmonious space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directions.map((direction, index) => (
            <DirectionCard
              key={index}
              {...direction}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionGrid;