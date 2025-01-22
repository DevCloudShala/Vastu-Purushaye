
import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { WEB_IMAGE } from '../../data/index.js';
import HeadingBorder from "../HeadingBorder.js";

// This hook will determine if the current view is considered "mobile"
const useIsMobile = () => {
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
const handleResize = () => {
setIsMobile(window.innerWidth <= 768);
};

window.addEventListener('resize', handleResize);

// Cleanup event listener on component unmount
return () => {
window.removeEventListener('resize', handleResize);
};
}, []);

return isMobile;
};

const VastuPurushayeSection = () => {
const isMobile = useIsMobile(); // Use the custom hook

return (
<div className="bg-gray-50 py-16  px-6 md:px-20 lg:px-32">
<Fade>
<h2 className={`${isMobile ? 'text-3xl md:text-4xl' : 'text-5xl'} font-bold text-center text-amber-600 mb-8`}>
Transform Your Life with Vastu Purushaye
</h2>
</Fade>

<div className={`${isMobile ? 'flex flex-col md:flex-row items-center justify-center' : 'flex justify-center flex-col px-44 md:flex-row items-center'}`}>
<Slide direction="left">
<div className={`${isMobile ? 'w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 flex items-center justify-center md:justify-start' : 'md:w-1/2 mb-6 md:mb-0 justify-center items-center md:mr-8'}`}>
<img
src={WEB_IMAGE.lakshmi} // Replace with your image URL
alt="Vastu Purushaye"
className={`${isMobile ? 'rounded-lg shadow-lg justify-center flex items-center transform scale-100 md:scale-110 hover:scale-105 transition-transform duration-500 max-w-sm md:max-w-full object-cover' : 'rounded-lg shadow-lg transform scale-[2.7] hover:scale-[2.8] transition-transform duration-500'}`}
/>
</div>
</Slide>

<Slide direction="right">
<div className={`${isMobile ? 'w-full justify-center md:w-1/2 text-justify' : 'md:w-full p-7 text-justify'}`}>
<p className={`${isMobile ? 'text-base md:text-lg text-justify' : 'text-xl text-justify'} text-gray-700 mb-4 text-justify leading-relaxed`}>
Vastu Purushaye is your trusted partner in bringing balance,
harmony, and prosperity to your life through the timeless
principles of Vastushastra. Rooted in the profound wisdom of the
Vedic system, we specialize in offering comprehensive Vastu
consultancy services that align your living and working spaces
with positive cosmic energies.
</p>
<p className={`${isMobile ? 'text-base md:text-lg' : 'text-xl'} text-gray-700 mb-4 text-justify leading-relaxed`}>
Our expert solutions are result-oriented and focus on
No-Demolition methods, ensuring your spaces are transformed
without disrupting their existing structure. We provide
customized, effective solutions tailored to your needs, helping
you unlock your true potential and achieve a life filled with
harmony, success, and fulfillment.
</p>
<p className={`${isMobile ? 'text-base md:text-lg' : 'text-xl'} text-gray-700 text-justify leading-relaxed`}>
Discover the power of a balanced environment with Vastu Purushaye
– where ancient wisdom meets modern solutions to transform your
life.
</p>
</div>
</Slide>
</div>

<Fade delay={300}>
<div className="mt-10 flex justify-center">
<a
href="/contact" // Replace with your contact section or link
className={`${isMobile ? 'bg-amber-600 text-white px-6 py-3 rounded-md text-base md:text-lg shadow-md' : 'bg-amber-600 text-white px-6 py-3 rounded-md text-lg shadow-md'} hover:bg-red-700 transition-colors duration-300`}
>
Contact Us
</a>
</div>
</Fade>
</div>
);
};

export default VastuPurushayeSection;