import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className='heroSection'>
        <Hero />
        <ParticlesContainer />
      </div>
    </>
  );
}

export default App;
