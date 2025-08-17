import React from 'react';
import './Navbar.css';
import samayaLogo from '../assets/small.png';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={samayaLogo} alt="SamayaOdyssey" />
          <span>SamayaOdyssey</span>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#packages" className="nav-link">Tour Packages</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 