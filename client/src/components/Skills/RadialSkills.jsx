import React from 'react';

import animationData from './assets/AnimationRubix.json';
import Lottie from 'lottie-react';

import ImageIcon from './assets/html.svg';
import cssSVG from './assets/css.svg';
import jsSVG from './assets/javascript.svg';
import mongoSVG from './assets/mongodb.svg';
import reactSVG from './assets/react.svg';
import nodejsSVG from './assets/node-js.svg';
import graphQLSVG from './assets/graphql.svg';
import expressSVG from './assets/express.svg';

const RadialSkills = () => {
  return (
    <section className='circular'>
      <div className='containerWheel'>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 1 }}>
            <img src={ImageIcon} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 2 }}>
            <img src={cssSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 3 }}>
            <img src={jsSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 4 }}>
            <img src={mongoSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 5 }}>
            <img src={reactSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 6 }}>
            <img src={nodejsSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 7 }}>
            <img src={graphQLSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='icon'>
          <div className='imgBx' style={{ '--i': 8 }}>
            <img src={expressSVG} alt='' className='html__img ' />
          </div>
        </div>
        <div className='content'></div>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            maxWidth: '70%',
            maxHeight: '70%',
          }}
          alt='logo'
          className='mr-2'
        />
      </div>
    </section>
  );
};

export default RadialSkills;
