import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About';
import Contact from '../Components/Contact';
import TechStack from '../Components/TechStack';
import FeaturedProjects from '../Components/FeaturedProjects';
import Experience from '../Components/Experience';
import Footer from '../Components/Footer';
import ScrollIndicator from '../Components/ScrollIndicator';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollIndicator />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <FeaturedProjects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;