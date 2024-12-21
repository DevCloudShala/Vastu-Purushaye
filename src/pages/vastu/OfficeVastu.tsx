import React from 'react';
import { motion } from 'framer-motion';
import OfficeFeatures from './sections/OfficeFeatures';
import OfficeServices from './sections/OfficeServices';
import OfficeHero from './sections/OfficeHero';
import ContactCTA from '../../components/shared/ContactCTA';

const OfficeVastuPage = () => {
  return (
    <div className="pt-16">
      <OfficeHero />
      <OfficeFeatures />
      <OfficeServices />
      <ContactCTA 
        title="Build Your Success Today"
        description="Let us assist you in creating an environment where success thrives."
        buttonText="Get Expert Consultation"
      />
    </div>
  );
};

export default OfficeVastuPage;