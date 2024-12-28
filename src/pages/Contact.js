import React from 'react';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Herosection from '../components/contact/Herosection';
import Inquiry from '../components/contact/Inquiry';
import Footer from '../commoncomponent/footer/Footer';

function Contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default Contact
