import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import VastuTipsPage from './pages/VastuTipsPage';
import WhatsAppMessage from '../src/components/WhatsAppMessage';
import Footer from './components/footer/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhyChooseUs from './pages/WhyChooseUs';
import OfficeVastuPage from './pages/vastu/OfficeVastu';
import CommercialVastuPage from './pages/vastu/CommercialVastuPage';
import HomeVastuPage from './pages/vastu/HomeVastu';
import IndustrialVastuPage from './pages/vastu/IndustrialVastu';
import DirectionGuidancePage from './pages/vastu/DirectionGuidancePage';
import EnergyBalancePage from './pages/vastu/EnergyBalancePage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
function App() {
  return (
    <>
    <WhatsAppMessage/>
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/tips" element={<VastuTipsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
            <Route path="/office-vastu" element={<OfficeVastuPage />} />
            <Route path="/Home-vastu" element={<HomeVastuPage />} />
            <Route path="/Commercial-vastu" element={<CommercialVastuPage />} />
            <Route path="/Industrial-vastu" element={<IndustrialVastuPage />} />
            <Route path="/direction-guidance" element={<DirectionGuidancePage />} />
            <Route path="/energy-balance" element={<EnergyBalancePage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </>

  );
}

export default App;