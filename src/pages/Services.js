import { Box } from '@mui/material';
import React from 'react';
import Herosection from '../components/services/Herosection';
import Ourservice from '../components/services/Ourservice';
import Howwework from '../components/services/Howwework';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Footer from '../commoncomponent/footer/Footer';

function Services() {
  return (
    <Box>
      <Header />
      <Navbar />
      <Herosection/>
      <Howwework />
      <Ourservice/>
      <Footer />
    </Box>
  );
}

export default Services;
