import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <h1>NZMA</h1>
          <img 
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src="/images/NZMAlogo.png"
            alt='NZMA logo'
          />
          <div className='links'>
           <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul> 
        </div>
        </div>

        <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
          <button className='login-signup-button'>Log In / SignUp</button>
          <div className='menu-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
          <ul className='nav-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
