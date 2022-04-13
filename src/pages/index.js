import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { heroData } from '../components/HeroSection/Data';
import InfoSection from '../components/InfoSection';
import { infoData, infoDataTwo } from '../components/InfoSection/Data';
import ServiceSection from '../components/ServiceSection';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContatoSection';
import { contactData } from '../components/ContatoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection {...heroData} />
      <InfoSection {...infoData} />
      <ServiceSection />
      <InfoSection {...infoDataTwo} />
      <PortfolioSection />
      <ContactSection {...contactData}/>
      <Footer />
    </>
  );
};

export default Home