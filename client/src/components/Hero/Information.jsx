import React from 'react';

// import { motion } from 'framer-motion';

import Socials from './Socials';
import ScrollDown from './ScrollDown';

import resumepdf from '../../assets/jimmy-vela-resume.pdf';

const Information = () => {
  const handleDownloadPDF = () => {
    const pdfFilePath = resumepdf;
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'Jimmy-Vela-Resume.pdf';
    a.click();
  };

  return (
    <div className='hero__info'>
      <h1 className='hero__title'>JIMMY VELA</h1>
      <div className='title__line '></div>
      <h3 className='hero__stubtitle'>Full Stack Developer || MERN</h3>
      <p className='hero__description'></p>

      <Socials />
      <div className='heroButtons'>
        <a href='' className='resumeBtn' onClick={handleDownloadPDF}>
          <span className='spanResume'>
            {' '}
            Resume PDF &nbsp;<i className='uil uil-file-download'></i>
          </span>
        </a>

        <a href='' className='resumeBtn '>
          <span className='spanResume'>
            {' '}
            Contact &nbsp;<i className='uil uil-message'></i>
          </span>
        </a>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Information;
