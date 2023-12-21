import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <div className='heroSection'>
          <Hero />
          <ParticlesContainer />
        </div>
        <div className='divider'></div>
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
