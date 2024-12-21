import React from 'react';
import { motion } from 'framer-motion';
import IndustrialFeatures from './IndustrialSections/IndustrialFeatures';
import IndustrialService from './IndustrialSections/IndustrialService';
import IndustrialHero from './IndustrialSections/IndustrialHero';
import ContactCTA from '../../components/shared/ContactCTA';

const IndustrialVastuPage = () => {
  return (
    <div className="pt-16">
      <IndustrialHero />
      <IndustrialFeatures />
      <IndustrialService />
      <ContactCTA 
        title="Optimize Your Industry for Growth"
        description="At Industrial Vastu, we provide expert solutions to enhance the success of your industrial ventures. Our tailored approach ensures that your facility not only functions efficiently but also thrives energetically."
        buttonText="Contact us today to transform your industrial space!"
      />
    </div>
  );
};

export default IndustrialVastuPage;


