
import React from 'react';
import { motion } from "framer-motion";
import { WEB_IMAGE } from '../../data/index.js';
import ScrollToTop from '../../components/ScrollToTop.js';

const VastuSection = () => {
const vastuReasons = [
{
title: "Promotes Positive Energy",
text: "Aligning spaces with natural forces like sunlight and magnetic fields to promote positive energy.",
image: WEB_IMAGE.om
},
{
title: "Improves Health and Well-being",
text: "Ensures a balanced flow of energy for better physical and mental health.",
image: WEB_IMAGE.Health
},
{
title: "Enhances Prosperity",
text: "Removes obstacles to attract financial stability and wealth.",
image: WEB_IMAGE.EnhanceP
},
{
title: "Supports Mental Peace and Harmony",
text: "Encourages harmonious relationships and reduces stress.",
image: WEB_IMAGE.peace
}
];

return (
<div className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
<ScrollToTop/>

<div className="max-w-7xl mx-auto px-4">

{/* Introduction Section */}
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-center mb-16"
>
<h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
Understanding Vastu Shastra
</h2>
<p className="text-gray-600 text-2xl max-w-2xl mx-auto">
Vastu Shastra, the ancient Indian science of architecture, provides guidelines for designing and building harmonious and prosperous spaces.
</p>
</motion.div>

{/* Detailed Explanation Section */}
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8, delay: 0.5 }}
className="mb-16"
>
<h3 className="text-3xl font-bold text-center text-amber-600 mb-4">Why Vastu Matters?</h3>
<p className="text-lg text-center text-gray-700 max-w-4xl mx-auto">
Vastu Shastra is based on the principles of directional alignments, balancing the five elements, and creating a flow of positive energy. Applying Vastu principles can improve health, enhance financial prosperity, and bring peace and happiness to your environment. As we spend most of our time indoors, ensuring that these spaces are in harmony with nature becomes crucial for holistic well-being.
</p>
</motion.div>

{/* Benefits Highlight (Reasons) Section */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
{vastuReasons.map((reason, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4, delay: index * 0.2 }}
className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
>
<img src={reason.image} alt="Reason" className="w-full h-64 object-cover" />
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
<p className="text-gray-600">{reason.text}</p>
</div>
</motion.div>
))}
</div>

{/* Call-to-Action Section */}
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="bg-amber-500 text-white rounded-lg p-10 text-center"
>
<h3 className="text-3xl font-bold mb-4">Unlock the Potential of Your Space</h3>
<p className="text-lg mb-6">
Ready to transform your living or working environment? Contact us today to learn how Vastu can bring positivity and prosperity to your life.
</p>
<button className="bg-white text-amber-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-100">
Contact Us
</button>
</motion.div>

</div>
</div>
);
};

export default VastuSection;