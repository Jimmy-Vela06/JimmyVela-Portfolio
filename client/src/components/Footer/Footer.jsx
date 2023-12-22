import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer '>
      <div className='footer__container container'>
        <h1 className='footer__title'>Jimmy Vela</h1>
        <h1 className='footer__subtitle'>Thank you for stopping by. Any feedback is a gift</h1>

        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/jimmy-vela/' className='footer__social-link' target='_blank'>
            <i className='uil uil-linkedin-alt' />
          </a>
          <a href='https://github.com/Jimmy-Vela06' className='footer__social-link' target='_blank'>
            <i className='uil uil-github-alt' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
