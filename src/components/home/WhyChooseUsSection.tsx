import React from "react";
import { motion } from "framer-motion";
import {WEB_IMAGE} from '../../data/index.js'
const reasons = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Time-Tested Principles",
    description:
      "Our Vastu solutions are grounded in centuries-old wisdom, offering a harmonious blend of traditional practices and modern lifestyles. With this approach, your home becomes a sanctuary of balance and positive energy.",
  },
  {
    image:
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",    title: "Personalized Guidance",
    description:
      "We provide tailored advice for your home’s layout, interiors, and orientation. From selecting the perfect direction for each room to enhancing the energy flow, our customized recommendations will make your living space truly special.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Holistic Well-Being",
    description:
      "Experience improved relationships, financial stability, and peace of mind by aligning your home with the principles of Vastu. Our solutions ensure holistic growth and harmony in all aspects of life.",
  },
];

const WhyChooseSection = () => {
  return (
    <>

<motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-serif mt-8 font-bold text-gray-900 mb-4">
          Why Choose Home Vastu?
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto rounded"></div>
      </motion.div>
{
  reasons.map((reason, index) => (
    <section className=" px-4 py-8 flex flex-wrap items-center justify-center gap-6">
    {/* Image Section */}
   

    {/* Text Section */}
    <div className="flex-1 md:px-28 px-0">
      <h1 className="text-xl md:text-3xl font-bold mb-4">
        {index+1}- {reason.title}
      </h1>
      <p className="text-gray-700 text-xl md:text-2xl  leading-relaxed mb-4">
        {reason.description}
      </p>
   
    </div>
  </section>
  ))
}
    </>
  );
};

export default WhyChooseSection;
