import React, { useCallback } from 'react';

import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import './particles.css';

const ParticlesContainer = () => {
  //
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: {
            value: '#fffff7',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: 'push',
            // },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 20,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#bdb8b8',
          },
          links: {
            color: '#bdb8b8',
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1.2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 1.2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
