import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import OpportunitySection from './components/OpportunitySection';
import CallToActionSection from './components/CallToActionSection';
import StepsSection from './components/StepsSection';
import PostConstructionSection from './components/PostConstructionSection';
import FranchisePlansSection from './components/FranchisePlansSection';
import Footer from './components/Footer';
import BotaoWhatsApp from './components/BotaoWhatsApp';
import ServicesSection from './components/ServicesSection';
import FounderStorySection from './components/FounderStorySection';
import WhyChooseSection from './components/WhyChooseSection';
import FranchiseStepsSection from './components/FranchiseStepsSection';
import MediaSection from './components/MediaSection';
import FAQSection from './components/FaqSection';

function App() {
  return (
    <>
      <BotaoWhatsApp />
      <Navbar />
      <Hero />
      <StepsSection />
      <AboutSection />
      <OpportunitySection />
      <FounderStorySection />
      <CallToActionSection />
      <ServicesSection />
      {/* <PostConstructionSection /> */}
      <FranchisePlansSection />
      <WhyChooseSection />
      <FranchiseStepsSection />
      <MediaSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
