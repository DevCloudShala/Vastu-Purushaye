import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {WEB_IMAGE} from '../../data/index.js'
import ScrollDownButton from '../ScrollDownButton.js';
const WelcomeSection = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center mb-24 mt-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Discover Inner Harmony
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight"
            >
              Home Vastu: Harmonize Your Living Space
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Welcome to Vastu purushaye, your ultimate guide to creating a balanced and harmonious living environment. Vastu Shastra, the ancient Indian science of architecture, focuses on aligning your home with natural elements and cosmic energy to promote health, happiness, and prosperity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a href='/contact' className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2 transition-colors">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <ScrollDownButton  targetId="section2" offset={-50} duration={700}>
                
              <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
              </ScrollDownButton>

            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              {/* Placeholder for your image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
              src={WEB_IMAGE.founderImage}
              alt="To-The-Scale Layout"
              className="w-full h-full object-cover rounded-lg"
            />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-amber-100"></div>
            <div className="absolute -z-20 top-16 right-16 w-full h-full rounded-2xl bg-amber-50"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;