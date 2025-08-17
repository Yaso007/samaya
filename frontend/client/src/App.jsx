
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourPackages from './components/TourPackages';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import NathulaPass from './pages/NathulaPass';
import YumthangValley from './pages/YumthangValley';
import GurudongmarLake from './pages/GurudongmarLake';
import KanchenjungaBaseCamp from './pages/KanchenjungaBaseCamp';
import TemiTeaGarden from './pages/TemiTeaGarden';
import YakSafari from './pages/YakSafari';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HomePage = () => (
    <>
      <Hero />
      <TourPackages />
      <BookingForm />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nathula-pass" element={<NathulaPass />} />
          <Route path="/yumthang-valley" element={<YumthangValley />} />
          <Route path="/gurudongmar-lake" element={<GurudongmarLake />} />
          <Route path="/kanchenjunga-base-camp" element={<KanchenjungaBaseCamp />} />
          <Route path="/temi-tea-garden" element={<TemiTeaGarden />} />
          <Route path="/yak-safari" element={<YakSafari />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
