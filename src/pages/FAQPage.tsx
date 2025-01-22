import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import React from 'react';
import { Fade } from 'react-awesome-reveal';


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
  {
  question: "How long does a Vastu consultation take?",
  answer: "A typical Vastu consultation can take anywhere from a few hours to a day, depending on the complexity and size of the property. Follow-up visits may also be required for comprehensive analysis and implementation."
  },
  {
  question: "Can Vastu be applied to existing buildings?",
  answer: "Yes, Vastu can be applied to existing buildings through adjustments and remedies. Many modifications do not require structural changes but focus on placement, decor, and the use of specific symbols or colors."
  },
  {
  question: "Does Vastu work with modern architecture?",
  answer: "Vastu principles can be harmonized with modern architecture by integrating design elements that complement both styles. Our consultants work with architects to ensure functional design and aesthetic appeal are maintained."
  },
  {
  question: "Are Vastu principles scientifically proven?",
  answer: "While Vastu Shastra is based on ancient wisdom and cultural practices, some aspects align with modern scientific principles such as orientation, ventilation, and energy flow. Many people report positive results, though it may not be scientifically validated in conventional terms."
  },
  {
  question: "How does Vastu differ from Feng Shui?",
  answer: "While both Vastu Shastra and Feng Shui aim to harmonize living spaces, they originate from different cultures—India and China, respectively. They differ in principles, methodologies, and specific practices, although both focus on energy flow."
  },
  {
  question: "Do I need to make structural changes for Vastu compliance?",
  answer: "Not necessarily. Many Vastu remedies involve adjustments like changing furniture placement, color schemes, or using specific symbols, which do not require structural alterations. However, for new constructions, Vastu principles can guide the architectural design."
  },
  {
  question: "Can Vastu help in business success?",
  answer: "Vastu can be applied to business premises to potentially enhance productivity, financial flow, employee satisfaction, and customer attraction by optimizing space usage and energy alignment."
  },
  {
  question: "Is Vastu relevant for small apartments?",
  answer: "Vastu principles can be adapted to any size of living space, including small apartments. Simple changes and remedies can be effective in optimizing energy flow and enhancing the living environment."
  },
  {
  question: "What should I do if I can't apply all Vastu principles?",
  answer: "If full compliance isn't feasible, focusing on key areas like the main entrance, kitchen, and bedroom can still bring significant benefits. Consult a Vastu expert for personalized solutions and effective remedies."
  },
  {
  question: "How can colors influence Vastu in my home?",
  answer: "Colors play a vital role in Vastu by affecting mood and energy. Each color symbolizes different elements and energies, and their proper use can enhance positivity and balance in a space. For example, light colors can create a sense of space and tranquility, while warm tones can add vibrancy and energy."
  }
  ];
const FAQPage = ({page}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const faqsFew = page===false? faqs.slice(0,5): faqs
  return (

    <div className="pt-16">
    <ScrollToTop/>

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
          {faqsFew.map((faq, index) => (
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
   { page===false&& <Fade delay={300}>
<div className="mt-10 flex justify-center">
<a
href="/faqs" // Replace with your contact section or link
className={'bg-amber-600 text-white px-6 py-3 rounded-md text-lg shadow-md mb-11'}
>
Show all
</a>
</div>
</Fade>}
    </div>
  );
};

export default FAQPage;