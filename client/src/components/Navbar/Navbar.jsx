import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Vela
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#hero' className='nav__link'>
                <i className='uil uil-home nav__icon' /> Home
              </a>
            </li>

            <li className='nav__item'>
              <a href='#aboutMe' className='nav__link activ-link'>
                <i className='uil uil-user nav__icon' /> About Me
              </a>
            </li>

            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-file-alt nav__icon' /> Skills
              </a>
            </li>

            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <i className='uil uil-scenery nav__icon' /> Portfolio
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon' /> Contact
              </a>
            </li>
          </ul>
          <i className=' uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className='apps uil-apps' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
