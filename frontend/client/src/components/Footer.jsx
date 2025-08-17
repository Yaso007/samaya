import React from 'react';
import './Footer.css';
import samayaLogo from '../assets/SamayaLogo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={samayaLogo} alt="SamayaOdyssey" />
              <h3>SamayaOdyssey</h3>
            </div>
            <p>Your trusted partner for unforgettable adventures in the mystical land of Sikkim.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#packages">Tour Packages</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Popular Packages</h4>
            <ul>
              <li><a href="#packages">Nathula Pass Adventure</a></li>
              <li><a href="#packages">Yumthang Valley & Lachung</a></li>
              <li><a href="#packages">Gurudongmar Lake Expedition</a></li>
              <li><a href="#packages">Kanchenjunga Base Camp</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Gangtok, Sikkim, India
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@samayaodyssey.com
              </p>
              <p>
                <i className="fas fa-clock"></i>
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SamayaOdyssey. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 