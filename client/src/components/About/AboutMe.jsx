import React from 'react';

import './aboutMe.css';
import AboutPic from '../../assets/aboutMePic.jpg';

const AboutMe = () => {
  return (
    <section className='aboutSEE section' id='aboutMe'>
      <div className='aboutMargin'>
        <h2 className='section__title'>About Me</h2>
        <div className='containerAbout  about__container  grid'>
          <img src={AboutPic} alt='' className='about__img' />
          <div className='data'>
            <span className='about__subtitle'>Hello!</span>
            <p className='about__description'>
              Aspiring software developer with 5+ years working as a fire alarm designer. Recently, I have pivoted my career focus after
              graduating a full stack development course from SMU. Where my passion for creating solutions to problems amplified. With my
              knowlege in both front-end and back-end development I pursue to create high quality applications that users love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
