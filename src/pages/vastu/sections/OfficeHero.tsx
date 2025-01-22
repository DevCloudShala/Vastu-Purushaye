
// OfficeHero Component
import React from 'react';
import { motion } from 'framer-motion';

const OfficeHero = () => {
return (
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-500 via-red-500 to-pink-500">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-center text-white px-4"
>
<h1 className="text-6xl font-bold mb-6">
Office Vastu: Create a Workplace for Success
</h1>
<p className="text-xl mb-8">
Welcome to Vastu Purushaye, where we help you design workspaces that foster productivity,
creativity, and prosperity.
</p>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-white text-gray-900 px-8 py-3  text-lg font-semibold shadow-lg"
>
Schedule Consultation
</motion.button>
</motion.div>
</section>
);
};

export default OfficeHero;

