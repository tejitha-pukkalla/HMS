// src/pages/index.js
import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import Testimonials from '../components/landing/Testimonials';
import BookAppointment from '../components/landing/BookAppointment';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

const IndexPage = () => {
  return (
    <div className="font-sans">
      {/* <Navbar />
      <Hero /> */}
      {/* <About /> */}
      {/* <Services />
      <Testimonials />
      <BookAppointment /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default IndexPage;