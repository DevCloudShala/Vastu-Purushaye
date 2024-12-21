import React from 'react';
import DirectionHero from './sections/DirectionHero';
import DirectionGrid from './sections/DirectionGrid';
import DirectionTips from './sections/DirectionTips';
import ContactCTA from '../../components/shared/ContactCTA';

const DirectionGuidancePage = () => {
  return (
    <div className="pt-16">
      <DirectionHero />
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