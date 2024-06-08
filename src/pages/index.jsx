import React from 'react';
import Navbar from '../components/landing/navbar';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
import Clients from '../components/landing/clients';
import Testimonials from '../components/landing/testimonials';
import Contact from '../components/landing/contact';
import Footer from '../components/landing/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
