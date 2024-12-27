
import React from 'react';
import { motion } from 'framer-motion';
import {WEB_IMAGE} from '../data/index.js'
import ReviewCarousel from '../components/ReviewCarousel.js';
import ScrollToTop from '../components/ScrollToTop.js';
const AboutPage = () => {
  const points = [
    {
    title: "Expert Guidance",
    description: "Our team comprises seasoned Vastu consultants with years of experience in providing scientifically-backed and practical solutions tailored to your needs."
    },
    {
    title: "Holistic Approach",
    description: "We blend traditional Vastu principles with modern architectural sensibilities to create harmonious and balanced living and working spaces."
    },
    {
    title: "Personalized Solutions",
    description: "Every property and individual is unique, and so are our recommendations. We provide customized solutions that align with your lifestyle, goals, and preferences."
    },
    {
    title: "Proven Results",
    description: "Countless satisfied clients have experienced enhanced positivity, prosperity, and well-being after implementing our Vastu remedies."
    },
    {
    title: "End-to-End Support",
    description: "From site analysis and layout planning to post-implementation consultations, we are with you every step of the way."
    },
    {
    title: "Affordable and Transparent Services",
    description: "We offer value-for-money services with no hidden costs, ensuring complete transparency and client satisfaction."
    }
    ];
return (
<section className="py-20 bg-gradient-to-b from-white to-gray-100">
<ScrollToTop/>
  
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-center mb-16"
>
<h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">About Avinash Goyal</h2>
<p className="text-gray-600 max-w-3xl mx-auto">
An Astrologer and Vastu Consultant Since 2010
</p>
</motion.div>

<div className="flex flex-col lg:flex-row items-center gap-12">
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="w-full lg:w-1/3 flex justify-center lg:justify-start"
>
<div className="w-900 h-200 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
{/* Place the founder's image here */}
<img src={WEB_IMAGE.founderImage1} alt="Avinash Goyal" className="object-cover w-full h-full" />
</div>
</motion.div>

<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.2 }}
className="w-full lg:w-2/3 text-left"
>
<h3 className="text-2xl font-bold text-blue-600 mb-4">With over a decade of experience</h3>
<p className="text-lg text-gray-700 mb-6">
I have been dedicated to transforming spaces into havens of positivity, harmony, and prosperity. Since embarking on this journey in 2010, I have had the privilege of working with a diverse clientele across residential, commercial, and industrial sectors. My approach integrates traditional Vastu principles with contemporary design sensibilities, ensuring each project complements the modern lifestyle while staying true to its roots.
</p>

<div className="space-y-4">
<div>
<h4 className="text-xl font-semibold text-gray-800">My Expertise:</h4>
<ul className="list-disc list-inside text-gray-700">
<li>In-Depth Knowledge: Mastery of ancient Vastu principles and their practical application in today’s architecture and design. This enables me to recognize subtle energy patterns and adjust them for optimal harmony and balance.</li>
<li>Tailored Solutions: Each recommendation is customized to suit your specific property, lifestyle, and aspirations. I believe in a collaborative process, ensuring that each design reflects your unique vision and goals.</li>
<li>Problem Solver: Specializing in identifying and resolving Vastu-related issues to remove obstacles and enhance well-being. My diagnostic skills allow me to uncover hidden disruptions and offer effective, sustainable solutions.</li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold text-gray-800">My Mission:</h4>
<p className="text-gray-700">
To help individuals and businesses create spaces that foster peace, success, and growth by harmonizing energies effectively. I am committed to guiding you through a transformative journey that enriches both your personal and professional life.
</p>
</div>

<div>
<h4 className="text-xl font-semibold text-gray-800">Why Choose Me?</h4>
<ul className="list-disc list-inside text-gray-700">
<li>Over 14 years of hands-on experience in Vastu consultancy. My extensive background ensures that you receive informed and credible advice.</li>
<li>A trusted advisor to hundreds of satisfied clients across various sectors, from family homes to multinational corporations. My success stories are a testament to the positive impact of my work.</li>
<li>A passionate advocate for blending ancient wisdom with modern living. I strive to create environments that not only meet functional needs but also uplift the spirit.</li>
<li>Committed to continuous learning and adaptation, ensuring my methods remain relevant in an ever-evolving world.</li>
</ul>
</div>
</div>

<p className="text-lg text-gray-700 mt-6">
Let me guide you on a journey to unlock the true potential of your space. Together, we can create an environment that resonates with balance and positivity, turning your vision into reality.
</p>
</motion.div>
</div>
</div>


<section className="py-20 bg-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.h2
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="text-3xl font-extrabold text-center text-gray-900 mb-10"
>
Why Choose Us?
</motion.h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{points.map((point, index) => (
<motion.div
key={index}
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
className="bg-white rounded-lg shadow-lg p-6 hover:bg-blue-50"
>
<h3 className="text-xl font-bold text-amber-600 mb-2">{point.title}</h3>
<p className="text-gray-700">{point.description}</p>
</motion.div>
))}
</div>

<motion.div
className="mt-8 text-center"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: points.length * 0.1 }}
>
<p className="text-lg text-gray-800">
Choose us to unlock the potential of your space and bring harmony, happiness, and success into your life.
</p>
</motion.div>
</div>
</section>

<ReviewCarousel/>
</section>
);
};

export default AboutPage;