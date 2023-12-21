import React from 'react';

import Information from './Information';

import './hero.css';

const Hero = () => {
  return (
    <section className='hero section' id='hero'>
      <div className='hero__container container '>
        <div className='hero__content heroGrid '>
          <div className='hero__img'></div>
          <div className='infoContain'>
            <Information />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
