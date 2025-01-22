import React from 'react';
import { motion } from 'framer-motion';
import ElementCard from '../../../components/ui/ElementCard';

const elements = [
  {
    image: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Earth (Prithvi)",
    direction: "Southwest",
    influence: "Stability and strength",
    description: "Represents foundation, stability, and material abundance. Add through plants, crystals, and earthy colors."
  },
  {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Water (Jal)",
    direction: "Northeast",
    influence: "Purity and abundance",
    description: "Symbolizes flow, adaptability, and emotional well-being. Incorporate through fountains and water features."
  },
  {
    image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Fire (Agni)",
    direction: "Southeast",
    influence: "Energy and transformation",
    description: "Represents passion, transformation, and vitality. Add through lighting and warm colors."
  },
  {
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Air (Vayu)",
    direction: "Northwest",
    influence: "Movement and change",
    description: "Symbolizes freedom, movement, and intellectual growth. Ensure proper ventilation and open spaces."
  },
  {
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Space (Akash)",
    direction: "Center",
    influence: "Connection and balance",
    description: "Represents consciousness and connection. Maintain clutter-free, open areas in the center."
  }
];

const ElementsGrid = () => {
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
            The Five Elements and Their Influence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding and balancing these elements is key to creating a harmonious space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elements.map((element, index) => (
            <ElementCard
              key={index}
              {...element}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElementsGrid;