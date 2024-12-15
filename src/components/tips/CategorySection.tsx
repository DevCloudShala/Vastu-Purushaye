import React from 'react';
import { motion } from 'framer-motion';
import TipCard from './TipCard';
import type { TipCategory } from '../../data/vastuTips';

interface CategorySectionProps {
  category: TipCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const Icon = category.icon;

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="p-3 bg-amber-50 rounded-lg">
          <Icon className="h-8 w-8 text-amber-600" />
        </div>
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900">{category.title}</h2>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {category.tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;