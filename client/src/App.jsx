import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <main className='main'>
        <div className='heroSection'>
          <Hero />
          <ParticlesContainer />
        </div>
        <div className='divider'></div>
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
