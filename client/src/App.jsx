import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import './App.css';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Error caught by error boundary:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong.</div>;
//     }

//     return this.props.children;
//   }
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
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
        <Contact />
        {/* <ErrorBoundary>
          <Contact />
        </ErrorBoundary> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
