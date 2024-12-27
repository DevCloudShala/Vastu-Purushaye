
import React from 'react';
import { motion } from 'framer-motion';
import BlogFeatures from './CommercialSections/BlogFeatures';
import HomeServices from './CommercialSections/CommercialService';
import BlogsHero from './CommercialSections/BlogsHero';
import IndividualFeatures from './../../components/IndividualFeatures';
import ContactCTA from '../../components/shared/ContactCTA';
import { WEB_IMAGE } from '../../data/index.js'
import WEB_DATA from '../../data/data.js'
import ScrollToTop from '../../components/ScrollToTop.js';
{/* <OfficeHero />
<OfficeFeatures />
<OfficeServices /> */}




// new


const OfficeVastuPage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop/>

      <BlogsHero bgImage={WEB_IMAGE.office} title={WEB_DATA.Office.Hero.title} description={WEB_DATA.Office.Hero.description} />
      <BlogFeatures bgImage={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} features={WEB_DATA.Office.features} vastuType={"Office"} descriptionH2={WEB_DATA.Office.featuresDescription}/>
      
      <HomeServices ImportantElementsCommercial={WEB_DATA.Office.Iservices} services={WEB_DATA.Office.Iservices.services} />
      <IndividualFeatures vastContent={WEB_DATA.Office.IndividualFeatures}/>
      <ContactCTA 
        title="Build Your Success Today"
        description="Let us assist you in creating an environment where success thrives."
        buttonText="Get Expert Consultation"
      />
    </div>
  );
};

export default OfficeVastuPage;