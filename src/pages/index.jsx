import React, { useRef, useEffect } from 'react';
import Navbar from '../components/landing/navbar';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
import Clients from '../components/landing/clients';
import Testimonials from '../components/landing/testimonials';
import Contact from '../components/landing/contact';
import Footer from '../components/landing/footer';
import ScrollTop from '../components/landing/scrolltop';

const Home = () => {
  const aboutRef = useRef(null);
  const clientsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === "about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === "clients" && clientsRef.current) {
        clientsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === "testimonials" && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === "contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="clients" ref={clientsRef}>
        <Clients />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="testimonials" ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;
