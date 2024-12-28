import React from 'react';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Herosection from '../components/blog/Herosection';
import Blogs from '../components/blog/Blogs';
import Footer from '../commoncomponent/footer/Footer';

function Blog() {
  return (
    <div>
     <Header />
     <Navbar />
     <Herosection />
     <Blogs />
     <Footer />
    </div>
  );
}

export default Blog;
