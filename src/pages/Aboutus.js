import { Box } from '@mui/material';
import React from 'react';
import AboutCompany from '../components/aboutus/AboutCompany';
import Aboutinfo from '../components/aboutus/Aboutinfo';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Footer from '../commoncomponent/footer/Footer';
import AboutHero from '../components/aboutus/AboutHero';


function Aboutus() {
  return (
    <Box>
        <Header />
        <Navbar />
        <AboutHero />
        <AboutCompany />
        <Aboutinfo />
        <Footer />
    </Box>
  );
}

export default Aboutus;
