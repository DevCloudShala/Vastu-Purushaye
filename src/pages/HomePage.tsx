import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/footer/Footer';
import { CheckCircle, HomeIcon, Image, MapIcon } from 'lucide-react';
import WelcomeSection from '../components/home/WelcomeSection';
import {AboutConsultant} from '../components/home/AboutConsultant';
import WhyChooseSection from '../components/home/WhyChooseUsSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';
import VastuSection from './vastu/VastuSection';

import {WEB_IMAGE} from '../data/index.js'
import VastuPurushayeSection from '../components/home/VastuPurushayeSection.js';
import WhatIsVastu from '../components/home/WhatIsVastu.js';
import BenefitsOfVastu from '../components/home/BenefitsOfVastu.js';
import ScrollToTop from '../components/ScrollToTop.js';
import Process from '../components/home/Process.js';
import { TestimonialsHome } from '../components/home/TestimonialsHome.js';
import ContactSection from '../components/home/ContactSection.js';
import ContactPage from './ContactPage.js';
import FAQPage from './FAQPage.js';
import BlogCarousel from '../components/home/BlogSection.js';

const HomePage = () => {
  return (
    <>
      <ScrollToTop/>

    <WelcomeSection />
    <AboutConsultant/>
    <Features />
  <Process/>
  <TestimonialsHome/>
  <ContactPage/>
  <FAQPage page={false}/>
  <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Blogs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Some of our blogs to educate you about Vastu Shashtra
          </p>
          <div className="px-8">
            <BlogCarousel />
          </div>
        </div>
      </div>

    {/* <VastuPurushayeSection/> */}
    {/* ✅ */}
  <WhatIsVastu/>

    {/* <ServicesSection /> */}
      {/* <Hero /> */}
      <div id='section2'>
      {/* <BenefitsOfVastu/> */}

      </div>
      {/* <WhyChooseSection /> */}
      {/* <VastuSection /> */}

  
    {/* New  */}
    {/* <section className="bg-gray-50 py-12">
    <div className="container mx-auto px-6 py-16">
  <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-14">
    Key Highlights of the Analysis
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-6">
   
        <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
          Identification of Vaastu Defects
        </h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed">
        A comprehensive evaluation to pinpoint areas that require correction, ensuring optimal alignment with Vaastu principles.
      </p>
    </div>
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-6">
        
        <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
          Assessment of Positive and Negative Aspects
        </h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed">
        Detailed analysis based on Vaastu principles to balance the property’s energies, enhancing overall harmony.
      </p>
    </div>
  </div>
</div>

    </section> */}
    <CTASection />
   
    </>
  );
};

export default HomePage;