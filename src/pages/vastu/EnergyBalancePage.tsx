
import React from 'react';
import EnergyHero from './sections/EnergyHero';
import ElementsGrid from './sections/ElementsGrid';
import EnergyTips from './sections/EnergyTips';
import ImbalanceSigns from './sections/ImbalanceSigns';
import ContactCTA from '../../components/shared/ContactCTA';

import DirectionHero from './sections/DirectionHero';
import DirectionGrid from './sections/DirectionGrid';
import DirectionTips from './sections/DirectionTips';
import { motion } from 'framer-motion';
import BlogFeatures from './CommercialSections/BlogFeatures.js';
import HomeServices from './CommercialSections/CommercialService';
import BlogsHero from './CommercialSections/BlogsHero'
import IndividualFeatures from './../../components/IndividualFeatures';
import { WEB_IMAGE } from '../../data/index.js'
import WEB_DATA from '../../data/data.js'
import ScrollToTop from '../../components/ScrollToTop';
const EnergyBalancePage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop/>
      <BlogsHero bgImage={WEB_IMAGE.direction} title={WEB_DATA.EnergyBalance.Hero.title} description={WEB_DATA.EnergyBalance.Hero.description} />
    <BlogFeatures bgImage={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} features={WEB_DATA.EnergyBalance.features} vastuType={"Directional"} descriptionH2={WEB_DATA.EnergyBalance.featuresDescription}/>
    
    <HomeServices ImportantElementsCommercial={WEB_DATA.EnergyBalance.Iservices} services={WEB_DATA.EnergyBalance.Iservices.services} />
    {/* <IndividualFeatures vastContent={WEB_DATA.direction.IndividualFeatures}/> */}


      <ElementsGrid />
      <EnergyTips />
      <ImbalanceSigns />
    
      <ContactCTA 
        title="Restore Balance Today"
        description="Let our experts help you harmonize your environment with nature's elements"
        buttonText="Get Expert Guidance"
      />
    </div>
  );
};

export default EnergyBalancePage;