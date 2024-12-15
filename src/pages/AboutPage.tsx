import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';
import founderImage from '../data/founderImage.jpeg';
const AboutPage = () => {
  return (
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
            About Vastu Purushaye
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing ancient wisdom to modern living spaces through authentic Vastu practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {[
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: "Ancient Wisdom",
              description: "Drawing from centuries-old Vastu Shastra principles"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Expert Team",
              description: "Certified Vastu consultants with decades of experience"
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Proven Results",
              description: "Thousands of satisfied clients across the globe"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-amber-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="prose prose-lg mx-auto"
        >
          <h2 className="text-3xl font-serif font-bold text-center mb-8">Our Journey</h2>
          <p className="text-gray-600">
            Founded in 2010, Vastu Purushaye has been at the forefront of bringing ancient Vastu wisdom to modern architecture and design. Our mission is to create harmonious living and working spaces that promote prosperity, peace, and positive energy.
          </p>
          <p className="text-gray-600">
            We believe that the principles of Vastu Shastra, when properly applied, can transform any space into a sanctuary of positive energy and success. Our team of expert consultants combines traditional knowledge with modern architectural understanding to provide practical solutions for contemporary spaces.
          </p>
        </motion.div>
      </motion.div>
            {/* Team Section */}
            <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Meet Us
        </h2>
        <p className="text-gray-600 text-center mt-4">
          We are passionate professionals dedicated to excellence.
        </p>
        <div className="justify-center items-center flex gap-8 mt-8">
          {['Avinash Goyal'].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-10 text-center"
            >
              <img src={founderImage} className="w-24 h-24 object-cover rounded-full mx-auto mb-4"></img>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600">Founder</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-amber-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Vastu Purushaye. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;