import React, { useState } from 'react';

import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import OtherSkills from './OtherSkills.jsx';
import RadialSkills from './RadialSkills.jsx';
import VerifyButton from './VerifyButton.jsx';

import './skills.css';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className=' container grid'>
        <RadialSkills />

        <div className='skills__container grid'>
          <Frontend />

          <Backend />
          <OtherSkills />
        </div>
        <VerifyButton />
      </div>
    </section>
  );
};

export default Skills;
