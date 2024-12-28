import { Box } from '@mui/material';
import React from 'react';
import Herosection from '../components/products/Herosection';
import OurProduct from '../components/products/OurProduct';
import OnionPowder from '../components/products/productlist/OnionPowder';
import GarlicPowder from '../components/products/productlist/GarlicPowder';
import Disposableitem from '../components/products/productlist/Disposableitem';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Footer from '../commoncomponent/footer/Footer';

function Products() {
  return (
    <Box>
      <Header/>
      <Navbar />
      <Herosection />
      <OurProduct />
      {/* <OnionPowder />
      <GarlicPowder />
      <Disposableitem /> */}
      <Footer />
    </Box>
  );
}

export default Products;
