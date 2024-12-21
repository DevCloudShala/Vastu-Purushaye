import React from 'react';
import { motion } from 'framer-motion';
import HomeFeatures from './CommercialSections/CommercialFeatures';
import HomeServices from './CommercialSections/CommercialService';
import HomeHero from './CommercialSections/CommercialHero';
import ContactCTA from '../../components/shared/ContactCTA';

const CommercialVastuPage = () => {
  return (
    <div className="pt-16">
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <ContactCTA 
        title="Take Your Business to the Next Level"
        description="At Commercial Vastu, we help you unlock the potential of your business space by aligning it with universal energies. Let us guide you toward a prosperous and thriving future."
        buttonText="Get in touch with us for expert Vastu consultations!"
      />
    </div>
  );
};

export default CommercialVastuPage;