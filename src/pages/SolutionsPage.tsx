import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SolutionCard from '../components/solutions/SolutionCard';
import SolutionDialog from '../components/solutions/SolutionDialog';
import { solutions } from '../data/solutions';
import ReactConfetti from 'react-confetti';
import VastuSection from './vastu/VastuSection';
import ScrollToTop from '../components/ScrollToTop';

const SolutionsPage = () => {

  const [selectedSolution, setSelectedSolution] = useState(null);

  const openDialog = (solution) => setSelectedSolution(solution);
  const closeDialog = () => setSelectedSolution(null);

  return (
    <>
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Vastu Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space with our comprehensive Vastu consultation services
          </p>
        </motion.div>

      
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} onOpen={openDialog} />
        ))}
      </div>
     
      </motion.div>
      <ScrollToTop/>

      <AnimatePresence>
        {selectedSolution && (
          <SolutionDialog solution={selectedSolution} onClose={closeDialog} />
        )}
      </AnimatePresence>
    </div>
    <VastuSection/>

    </>

  );
};

export default SolutionsPage;
