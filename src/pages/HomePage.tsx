import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/footer/Footer';
import { CheckCircle, HomeIcon, Image, MapIcon } from 'lucide-react';


const HomePage = () => {
  return (
    <>
    
      <Hero />
      <Features />
   <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">WHAT WE NEED?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://via.placeholder.com/720x1080"
              alt="To-The-Scale Layout"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">To-The-Scale Layout</h3>
            <p className="text-gray-600">Floor Plan of the property</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://via.placeholder.com/720x1080"
              alt="North Direction Marking"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">North Direction Marking</h3>
            <p className="text-gray-600">On the Layout Map</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://via.placeholder.com/720x1080"
              alt="Google Location"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">Google Location</h3>
            <p className="text-gray-600">Of the site</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              src="https://via.placeholder.com/720x1080"
              alt="Snapshot from Google Maps"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-700">Snapshot from Google Maps</h3>
            <p className="text-gray-600">Highlighting the site</p>
          </div>
        </div>
      </div>
    </section>
    {/* New  */}
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Key Highlights of the Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start bg-white shadow-lg rounded-lg p-6">
            <CheckCircle size={32} className="text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Identification of Vaastu Defects
              </h3>
              <p className="text-gray-600">
                Comprehensive evaluation to pinpoint areas that require correction.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-white shadow-lg rounded-lg p-6">
            <CheckCircle size={32} className="text-green-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Assessment of Positive and Negative Aspects
              </h3>
              <p className="text-gray-600">
                Detailed analysis based on Vaastu principles to balance the property’s energies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default HomePage;