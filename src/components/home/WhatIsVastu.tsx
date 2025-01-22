
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { WEB_IMAGE } from '../../data/index.js';

const FlipCard = ({ reason, onClick }) => (
<motion.div

className="bg-white shadow-lg rounded-lg overflow-hidden text-center cursor-pointer"
onClick={onClick}
>
<img src={reason.image} alt={reason.title} className="w-full h-64 object-cover" />
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
<p className="text-gray-600">{reason.text}</p>
</div>
</motion.div>
);

const Dialog = ({ isOpen, onClose, content, title }) => (
isOpen ? (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center  justify-center">
<div className="bg-white rounded-lg p-6 max-w-md md:mx-auto mx-4">
<h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
<p className="text-gray-600 mb-4 text-center">{content}</p>
<button onClick={onClose} className="bg-blue-500 text-white self-center px-4 py-2 rounded">Close</button>
</div>
</div>
) : null
);


const vastuReasons = [
    {
    title: "Promotes Positive Energy",
    text: "Aligning spaces with natural forces like sunlight and magnetic fields to promote positive energy.",
    image: WEB_IMAGE.om,
    moreInfo: "Vastu Shastra focuses on harnessing the natural energies present in our environment. By aligning your living space with the magnetic field and sunlight, it encourages a flow of positive energy into your home. This can lead to enhanced well-being, improved focus, and a more harmonious living environment. Implementing these changes might involve adjusting the orientation of rooms, using natural light effectively, and incorporating elements like water features or certain plants that resonate with positive vibrations.",
    },
    {
    title: "Improves Health and Well-being",
    text: "Ensures a balanced flow of energy for better physical and mental health.",
    image: WEB_IMAGE.Health,
    moreInfo: "Health and well-being are deeply connected to the environment we live in. Vastu Shastra suggests designing homes with good ventilation, ample sunlight, and strategic placement of rooms to enhance health. For instance, the northeast corner of the home is ideal for meditation and healing activities due to its calming energy. Additionally, certain colors and materials, like earthy tones and natural fabrics, can further contribute to a healthier living environment by reducing stress and anxiety.",
    },
    {
    title: "Enhances Prosperity",
    text: "Removes obstacles to attract financial stability and wealth.",
    image: WEB_IMAGE.EnhanceP,
    moreInfo: "Vastu principles can be applied to attract wealth and prosperity by ensuring the space is free from clutter and obstacles that impede the flow of energy. The entrance of the house should be welcoming and open to attract opportunities, while the placement of financial documents and valuables should be in the north direction to enhance financial growth. Incorporating symbols of prosperity, like a money plant or a small fountain in the north or northeast, can also be beneficial.",
    },
    {
    title: "Supports Mental Peace and Harmony",
    text: "Encourages harmonious relationships and reduces stress.",
    image: WEB_IMAGE.peace,
    moreInfo: "A harmonious living environment can significantly reduce stress and improve mental well-being. Vastu recommends using soft colors and avoiding sharp edges in furniture to create a soothing atmosphere. The southwest corner is ideal for bedrooms, providing stability and grounding energy, which fosters peaceful relationships and restful sleep. Additionally, incorporating calming elements such as water features or indoor plants in living spaces can help maintain tranquility and balance.",
    },

    ];

const WhatIsVastu = () => {
const [selectedReason, setSelectedReason] = useState(null);

return (
<section className="bg-zinc-100 px-4 py-8 flex flex-wrap items-center justify-center gap-6">
<div className="flex-1 min-w-[300px] max-w-[500px] flex justify-center">
<img
src={WEB_IMAGE.vastuMadal}
alt="Vastu Shastra Plan"
className="w-full rounded-lg shadow-lg"
/>
</div>

<div className="flex-1 min-w-[300px] max-w-[500px]">
<h3 className="text-amber-600 font-semibold text-sm uppercase mb-2">
Vastu Shastra
</h3>
<h1 className="text-3xl md:text-4xl text-justify font-bold mb-4">
What is Vastu Shastra?
</h1>
<p className="text-gray-700 text-xl md:text-2xl text-justify leading-relaxed mb-4">
Vastu is an alignment of cosmic forces with five key elements (Water,
Fire, Earth, Space, and Wind) of nature.
</p>
<p className="text-gray-700 text-xl md:text-2xl text-justify leading-relaxed mb-4">
Vastu is a Vedic system of architecture and design from ancient times
recorded in various Vastu texts. It consists of rules for designing
and constructing buildings in a systematic manner.
</p>
<p className="text-gray-700 text-xl md:text-2xl text-justify leading-relaxed">
Vastu has a very basic concept, that every space has a soul of its
own and a flow of positive energy would exist around it if that soul
is harnessed in the right way.
</p>
</div>

<div className="max-w-7xl mx-auto px-4">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-center mb-16"
>
<h2 className="md:text-5xl text-3xl  mt-10 font-serif font-bold text-gray-900 mb-4">
Understanding Vastu
</h2>
<p className="text-gray-600 text-2xl max-w-2xl text-justify mx-auto">
Vastu Shastra is an ancient Indian system of architecture and design that creates harmonious living spaces.
</p>
</motion.div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{vastuReasons.map((reason, index) => (
<FlipCard
key={index}
reason={reason}
onClick={() => setSelectedReason(reason)}
/>
))}

<Dialog
isOpen={!!selectedReason}
onClose={() => setSelectedReason(null)}
content={selectedReason?.moreInfo}
title={selectedReason?.title}
/>
</div>
</div>
</section>
);
};

export default WhatIsVastu;