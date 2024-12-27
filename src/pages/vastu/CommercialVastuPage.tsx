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
const CommercialVastuPage = () => {
  return (
    <div className="pt-16">
<ScrollToTop/>
      <BlogsHero bgImage={WEB_IMAGE.tothescale} title={WEB_DATA.commercial.Hero.title} description={WEB_DATA.commercial.Hero.description} />
      <BlogFeatures bgImage={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} features={WEB_DATA.commercial.features} vastuType={"Commercial"} descriptionH2={WEB_DATA.commercial.featuresDescription}/>
      
      <HomeServices ImportantElementsCommercial={WEB_DATA.commercial.Iservices} services={WEB_DATA.commercial.Iservices.services} />
      <IndividualFeatures vastContent={WEB_DATA.commercial.IndividualFeatures}/>
      <ContactCTA 
        title="Take Your Business to the Next Level"
        description="At Commercial Vastu, we help you unlock the potential of your business space by aligning it with universal energies. Let us guide you toward a prosperous and thriving future."
        buttonText="Get in touch with us for expert Vastu consultations!"
      />
    </div>
  );
};

export default CommercialVastuPage;