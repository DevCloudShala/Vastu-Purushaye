import React from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 mt-11 font-serif min-h-screen py-12">
      <ScrollToTop/>
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Why Choose Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">
            Bringing Harmony to Your Life
          </h2>
          <p className="text-gray-600">
          Our mission is to create environments that support health, happiness, success, and personal aspirations. By leveraging the principles of Vastu Shastra, we provide guidance to harmonize the elements of your living and working spaces. Whether you're looking to enhance your quality of life, buy or sell property, or optimize your business environment, our experienced team ensures tailored solutions that foster balance, growth, and prosperity. Contrary to myths, Vastu doesn't always demand major changes – our proven methods focus on practical and effective strategies to align the natural energies around you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">
            Experienced Professionals
          </h2>
          <p className="text-gray-600">
            Our team of experts, with over 40 years of collective experience, blends practical insights from the corporate world with deep Vastu knowledge. We specialize in transforming challenges into opportunities, guiding clients from struggle to success and stagnation to progress.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">
            Logical, Non-Destructive Solutions
          </h2>
          <p className="text-gray-600">
            We prioritize logical, science-backed solutions that avoid demolition or reconstruction. Our methods include rearranging spaces, color therapy, and energy alignment to bring harmony to your surroundings without disruption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600">
            With a presence across 10+ countries, including the USA, UK, India, and Singapore, we’ve built lasting relationships with clients worldwide. From industrial projects to residential consultations, our expertise has earned us the trust of individuals and organizations alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">
            Simple Yet Effective Practices
          </h2>
          <p className="text-gray-600">
            Our practices include advanced techniques such as Geo-Stress Management, color therapy, and space optimization. By addressing the root causes of energy imbalances, we ensure health, wealth, and prosperity for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
