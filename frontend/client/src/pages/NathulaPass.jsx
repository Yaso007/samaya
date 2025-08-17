import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageDetail.css';
import nathulaPass from '../assets/nathula pass.jpg';
import snowynathulaPass from '../assets/snowynathula pass.jpg';
import autumnathulaPass from '../assets/autumnathula pass.jpg';
import tsomgoLake from '../assets/lake.jpg';

const NathulaPass = () => {
  const navigate = useNavigate();

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Gangtok",
      activities: [
        "Arrive at Bagdogra Airport / New Jalpaiguri Railway Station",
        "Transfer to Gangtok (4-5 hours drive)",
        "Check-in at hotel",
        "Evening free for acclimatization",
        "Dinner and overnight stay in Gangtok"
      ],
      accommodation: "3-star hotel in Gangtok",
      meals: "Dinner"
    },
    {
      day: 2,
      title: "Gangtok to Nathula Pass",
      activities: [
        "Early morning breakfast",
        "Depart for Nathula Pass (14,140 ft)",
        "Visit Tsomgo Lake (12,400 ft)",
        "Explore Baba Harbhajan Singh Temple",
        "Witness the Indo-China border",
        "Return to Gangtok",
        "Evening at leisure"
      ],
      accommodation: "3-star hotel in Gangtok",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      title: "Gangtok Local Sightseeing & Departure",
      activities: [
        "Morning breakfast",
        "Visit MG Marg",
        "Explore Lal Bazaar",
        "Visit Rumtek Monastery",
        "Transfer to airport/railway station",
        "End of tour"
      ],
      accommodation: "N/A",
      meals: "Breakfast"
    }
  ];

  const highlights = [
    "Visit the Indo-China border at 14,140 ft",
    "Experience the pristine Tsomgo Lake",
    "Pay respects at Baba Harbhajan Singh Temple",
    "Witness breathtaking snow-capped mountains",
    "Explore the vibrant MG Marg in Gangtok",
    "Visit the famous Rumtek Monastery"
  ];

  const inclusions = [
    "Accommodation in 3-star hotels",
    "All meals as mentioned in itinerary",
    "Transport in comfortable vehicle",
    "Permits and entry fees",
    "Professional guide",
    "Hotel pickup and drop"
  ];

  const exclusions = [
    "Airfare/Train fare",
    "Personal expenses",
    "Tips and gratuities",
    "Any additional activities",
    "Travel insurance"
  ];

  return (
    <div className="package-detail">
      <div className="package-hero">
        <img src={nathulaPass} alt="Nathula Pass" />
        <div className="hero-overlay">
          <div className="hero-content">
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Packages
            </button>
            <h1>Nathula Pass Adventure</h1>
            <p>Experience the thrill of visiting the Indo-China border at 14,140 ft</p>
            <div className="package-info">
              <span>Duration: 3 Days / 2 Nights</span>
              <span>Price: ₹12,999</span>
              <span>Difficulty: Moderate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="package-content">
          <div className="package-description">
            <h2>About This Package</h2>
            <p>
              Embark on an unforgettable journey to one of the highest motorable passes in the world. 
              Nathula Pass, located at an altitude of 14,140 feet, offers breathtaking views of the 
              snow-capped Himalayas and serves as a gateway between India and China. This adventure 
              includes visits to the pristine Tsomgo Lake, the sacred Baba Harbhajan Singh Temple, 
              and the vibrant city of Gangtok.
            </p>
          </div>

          <div className="package-highlights">
            <h2>Highlights</h2>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="itinerary-section">
            <h2>Detailed Itinerary</h2>
            {itinerary.map((day) => (
              <div key={day.day} className="day-card">
                <div className="day-header">
                  <h3>Day {day.day}: {day.title}</h3>
                </div>
                <div className="day-content">
                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      {day.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-info">
                    <div className="info-item">
                      <strong>Accommodation:</strong> {day.accommodation}
                    </div>
                    <div className="info-item">
                      <strong>Meals:</strong> {day.meals}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="package-images">
            <h2>Gallery</h2>
            <div className="image-grid">
              <img src={nathulaPass} alt="Nathula Pass" />
              <img src={snowynathulaPass} alt="Snowy Nathula Pass" />
              <img src={autumnathulaPass} alt="Autumn Nathula Pass" />
              <img src={tsomgoLake} alt="Tsomgo Lake" />
            </div>
          </div>

          <div className="package-inclusions">
            <div className="inclusions">
              <h2>What's Included</h2>
              <ul>
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="exclusions">
              <h2>What's Not Included</h2>
              <ul>
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="booking-section">
            <h2>Book This Package</h2>
            <p>Ready to experience the adventure of a lifetime?</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/#contact')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NathulaPass; 