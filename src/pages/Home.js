import React from 'react';
import Herosection from '../components/home/Herosection';
import HomeProducts from '../components/home/HomeProducts';
import LatestBlogs from '../components/home/LatestBlogs';
import ProvideLogistics from '../components/home/ProvideLogistics';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Footer from '../commoncomponent/footer/Footer';

function  Home() {
  return (
    <div>
     <Header />
     <Navbar />
     <Herosection />
     <ProvideLogistics />
     <WhyChooseUs/>
     <HomeProducts/>
     <LatestBlogs/>
     <Footer />
    </div>
  );
}

export default Home;
