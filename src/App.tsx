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
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </>

  );
}

export default App;