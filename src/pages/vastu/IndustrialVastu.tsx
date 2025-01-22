
import React from 'react';
import { motion } from 'framer-motion';
import BlogFeatures from './CommercialSections/BlogFeatures.js';
import HomeServices from './CommercialSections/CommercialService';
import BlogsHero from './CommercialSections/BlogsHero';
import IndividualFeatures from './../../components/IndividualFeatures';
import ContactCTA from '../../components/shared/ContactCTA';
import { WEB_IMAGE } from '../../data/index.js'
import WEB_DATA from '../../data/data.js'
import ScrollToTop from '../../components/ScrollToTop';

const IndustrialVastuPage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop/>

    <BlogsHero bgImage={WEB_IMAGE.Industrial} title={WEB_DATA.Industrial.Hero.title} description={WEB_DATA.Industrial.Hero.description} />
    <BlogFeatures bgImage={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} features={WEB_DATA.Industrial.features} vastuType={"Industrial"} descriptionH2={WEB_DATA.Industrial.featuresDescription}/>
    
    <HomeServices ImportantElementsCommercial={WEB_DATA.Industrial.Iservices} services={WEB_DATA.Industrial.Iservices.services} />
    <IndividualFeatures vastContent={WEB_DATA.Industrial.IndividualFeatures}/>
    <ContactCTA 
        title="Optimize Your Industry for Growth"
        description="At Industrial Vastu, we provide expert solutions to enhance the success of your industrial ventures. Our tailored approach ensures that your facility not only functions efficiently but also thrives energetically."
        buttonText="Contact us today to transform your industrial space!"
      />
  </div>
  );
};

export default IndustrialVastuPage;


