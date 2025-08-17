import React from 'react';
import './Hero.css';
import mountainBg from '../assets/moutain.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mountainBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover the Magic of Sikkim
          </h1>
          <p className="hero-subtitle">
            Experience breathtaking landscapes, serene lakes, and majestic mountains with SamayaOdyssey
          </p>
          <div className="hero-buttons">
            <a href="#packages" className="btn btn-primary">
              Explore Packages
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 