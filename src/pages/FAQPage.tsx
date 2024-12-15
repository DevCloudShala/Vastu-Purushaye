import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Vastu Shastra?",
    answer: "Vastu Shastra is an ancient Indian science of architecture and design that aims to create harmony between nature and living spaces. It combines principles of design, architecture, and spiritual beliefs to promote positive energy flow."
  },
  {
    question: "How can Vastu improve my life?",
    answer: "Vastu can improve your life by optimizing the energy flow in your living spaces, potentially leading to better health, prosperity, relationships, and overall well-being through proper placement of elements and directional alignment."
  },
  {
    question: "Is Vastu consultation expensive?",
    answer: "Vastu consultation costs vary based on the type and size of the property. We offer different packages to suit various budgets, and the long-term benefits often outweigh the initial investment."
  },
  // Add more FAQs as needed
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Vastu Shastra and our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-amber-600" />
                ) : (
                  <Plus className="h-5 w-5 text-amber-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQPage;