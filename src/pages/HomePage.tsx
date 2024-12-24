import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/footer/Footer';
import { CheckCircle, HomeIcon, Image, MapIcon } from 'lucide-react';
import WelcomeSection from '../components/home/WelcomeSection';
import WhyChooseSection from '../components/home/WhyChooseUsSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';
import VastuSection from './vastu/VastuSection';

import {WEB_IMAGE} from '../data/index.js'

const HomePage = () => {
  return (
    <>
    <WelcomeSection />
      <ServicesSection />
      {/* <Hero /> */}
      <div id='section2'>
      <section className="bg-pink-100 px-4 py-8 flex flex-wrap items-center justify-center gap-6">
      {/* Image Section */}
      <div className="flex-1 min-w-[300px] max-w-[500px] flex justify-center">
        <img
          src={WEB_IMAGE.vastuMadal}
          alt="Vastu Shastra Plan"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 min-w-[300px] max-w-[500px]">
        <h3 className="text-amber-600 font-semibold text-sm uppercase mb-2">
          Vastu Shastra
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          What is Vastu Shastra?
        </h1>
        <p className="text-gray-700 text-xl md:text-2xl  leading-relaxed mb-4">
          Vastu is an alignment of cosmic forces with five key elements (Water,
          Fire, Earth, Space, and Wind) of nature.
        </p>
        <p className="text-gray-700 text-xl md:text-2xl  leading-relaxed mb-4">
          Vastu is a Vedic system of architecture and design from ancient times
          recorded in various Vastu texts. It consists of rules for designing
          and constructing buildings in a systematic manner.
        </p>
        <p className="text-gray-700 text-xl md:text-2xl  leading-relaxed">
          Vastu has a very basic concept, that every space has a soul of its
          own and a flow of positive energy would exist around it if that soul
          is harnessed in the right way.
        </p>
      </div>
    </section>
      <Features />
      </div>
      <WhyChooseSection />
      <VastuSection />

      <CTASection />
   <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">WHAT WE NEED?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src={WEB_IMAGE.tothescale}
              alt="To-The-Scale Layout"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">To-The-Scale Layout</h3>
            <p className="text-gray-600">Floor Plan of the property</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src={WEB_IMAGE.north}
              alt="North Direction Marking"
              className="w-full h-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">North Direction Marking</h3>
            <p className="text-gray-600">On the Layout Map</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src={WEB_IMAGE.pinlocation}
              alt="Google Location"
              className="w-full h-auto mb-40 pt-20 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">Google Location</h3>
            <p className="text-gray-600">Of the site</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src={WEB_IMAGE.location}

              alt="Snapshot from Google Maps"
             className="w-full h-auto mb-40 pt-20 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">Snapshot from Google Maps</h3>
            <p className="text-gray-600">Highlighting the site</p>
          </div>
        </div>
      </div>
    </section>
    {/* New  */}
    <section className="bg-gray-50 py-12">
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

    </section>
   
    </>
  );
};

export default HomePage;