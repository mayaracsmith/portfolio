import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeGrid from '../components/HomeGrid/HomeGrid';
import Testimonial from '../components/Testimonials/Testimonial';

function Home() {
    return (
      <div>
      <Navbar />
      <Header />
      <HomeGrid />
      <Testimonial />
      <Footer />
      </div>
    );
  }
  
  export default Home;