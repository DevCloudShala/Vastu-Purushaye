
import React from 'react';
import EnergyHero from './sections/EnergyHero';
import ElementsGrid from './sections/ElementsGrid';
import EnergyTips from './sections/EnergyTips';
import ImbalanceSigns from './sections/ImbalanceSigns';
import ContactCTA from '../../components/shared/ContactCTA';

const EnergyBalancePage = () => {
  return (
    <div className="pt-16">
      <EnergyHero />
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