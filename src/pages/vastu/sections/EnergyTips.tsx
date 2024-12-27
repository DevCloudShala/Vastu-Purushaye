
import React from 'react';
import { motion } from 'framer-motion';
import { WEB_IMAGE } from '../../../data/index.js'
import WEB_DATA from '../../../data/data.js'
const EnergyTips = () => {
const tips = [
{
text: "Declutter your space to ensure free energy flow. Start by assessing each room and removing unnecessary items that can cause chaos and obstruction. A clutter-free space enhances mental clarity and promotes a sense of peace, allowing energy to circulate unimpeded. This practice of minimalism not only brings physical order but also reduces stress and increases focus, making your environment more conducive to productivity and creativity.",
image: WEB_IMAGE.light
},
{
text: "Optimize light and ventilation for positivity. Ensure all areas receive ample natural light, which is crucial for boosting mood and energy levels. If natural light is lacking, consider full-spectrum bulbs that mimic daylight. Proper ventilation is equally important; fresh air circulation invigorates the space and removes stagnant energy, promoting health and well-being. Position windows and doors strategically to facilitate airflow, and use fans or air purifiers if necessary, to maintain a fresh and vibrant atmosphere.",
image: WEB_IMAGE.light2
},
{
text: "Balance colors to correspond with each element in your space. Use earthy tones like browns and beiges to invoke stability and grounding in the Southwest, and invigorating shades like red or orange in the Southeast to enhance energy and passion. Cool tones such as blues and greens can be used in the North and East to promote calmness and focus. This subtle use of color can harmonize the environment, evoking the desired moods and energies associated with each direction in Vastu.",
image: WEB_IMAGE.light3
},
{
text: "Add indoor plants like bamboo or money plants for health and prosperity. These plants are not only aesthetically pleasing but also improve air quality by filtering toxins and producing oxygen. Place them in the East or Southeast corners of your space to attract positive energy and abundance. Incorporating plants can create a serene and nurturing environment, fostering a connection with nature and contributing to both physical and mental well-being.",
image: WEB_IMAGE.light4
}
];

return (
<section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
<div className="max-w-3xl mx-auto px-4">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-center mb-16"
>
<h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
How to Achieve Energy Balance
</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Practical steps to align your space with the principles of Vastu.
</p>
</motion.div>

<div className="flex flex-col gap-8">
{tips.map((tip, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4, delay: index * 0.1 }}
className="flex flex-col text-left"
>
<img src={tip.image} alt={`Tip ${index + 1}`} className="w-full h-auto mb-4" />
<p className="text-lg text-gray-700">{tip.text}</p>
</motion.div>
))}
</div>
</div>
</section>
);
};

export default EnergyTips