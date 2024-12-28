
import React from 'react';
import { motion } from 'framer-motion';
import BlogFeatures from './CommercialSections/BlogFeatures';
import HomeServices from './CommercialSections/CommercialService';
import BlogsHero from './CommercialSections/BlogsHero';
import IndividualFeatures from './../../components/IndividualFeatures';
import ContactCTA from '../../components/shared/ContactCTA';
import { WEB_IMAGE } from '../../data/index.js'
import WEB_DATA from '../../data/data.js'
{/* <OfficeHero />
<OfficeFeatures />
<OfficeServices /> */}

import ScrollToTop from '../../components/ScrollToTop';



// new


const HomeVastuPage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop/>

      <BlogsHero bgImage={WEB_IMAGE.Home} title={WEB_DATA.Home.Hero.title} description={WEB_DATA.Home.Hero.description} />
      <BlogFeatures bgImage={"https://media.istockphoto.com/id/843912902/photo/young-asian-american-couple-at-home.jpg?s=612x612&w=0&k=20&c=SPPKmwSmAxMIvr6MLNcoW8hCtawW_WJJc_0IgMIUPUI="} features={WEB_DATA.Home.features} vastuType={"Home"} descriptionH2={WEB_DATA.Home.featuresDescription}/>
      
      <HomeServices ImportantElementsCommercial={WEB_DATA.Home.Iservices} services={WEB_DATA.Home.Iservices.services} />
      <IndividualFeatures vastContent={WEB_DATA.Home.IndividualFeatures}/>
      <ContactCTA 
        title="Build Your Success Today"
        description="Let us assist you in creating an environment where success thrives."
        buttonText="Get Expert Consultation"
      />
    </div>
  );
};

export default HomeVastuPage;