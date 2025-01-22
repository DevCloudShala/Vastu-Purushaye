import React from 'react';
import DirectionHero from './sections/DirectionHero';
import DirectionGrid from './sections/DirectionGrid';
import DirectionTips from './sections/DirectionTips';
import { motion } from 'framer-motion';
import BlogFeatures from './CommercialSections/BlogFeatures.js';
import HomeServices from './CommercialSections/CommercialService';
import BlogsHero from './CommercialSections/BlogsHero'
import IndividualFeatures from './../../components/IndividualFeatures';
import ContactCTA from '../../components/shared/ContactCTA';
import { WEB_IMAGE } from '../../data/index.js'
import WEB_DATA from '../../data/data.js'
import ScrollToTop from '../../components/ScrollToTop';
const DirectionGuidancePage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop/>
      <BlogsHero bgImage={WEB_IMAGE.direction} title={WEB_DATA.directionGuide.Hero.title} description={WEB_DATA.directionGuide.Hero.description} />
    <BlogFeatures bgImage={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} features={WEB_DATA.directionGuide.features} vastuType={"Directional"} descriptionH2={WEB_DATA.directionGuide.featuresDescription}/>
    
    <HomeServices ImportantElementsCommercial={WEB_DATA.directionGuide.Iservices} services={WEB_DATA.directionGuide.Iservices.services} />
    {/* <IndividualFeatures vastContent={WEB_DATA.direction.IndividualFeatures}/> */}


      <DirectionGrid />
      <DirectionTips />


      <ContactCTA 
        title="Get Personalized Direction Guidance"
        description="Let our experts help you align your space with positive energies"
        buttonText="Book Consultation"
      />
    </div>
  );
};

export default DirectionGuidancePage;