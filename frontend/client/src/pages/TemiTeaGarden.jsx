import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageDetail.css';
import temiTea from '../assets/temi-tea.jpg';
import gtk from '../assets/gtk.jpg';
import urbanSikkim from '../assets/urban sikkim.jpg';
import lake from '../assets/lake.jpg';

const TemiTeaGarden = () => {
  const navigate = useNavigate();

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Gangtok",
      activities: [
        "Arrive at Bagdogra Airport / New Jalpaiguri Railway Station",
        "Transfer to Gangtok (4-5 hours drive)",
        "Check-in at hotel",
        "Evening visit to MG Marg",
        "Dinner and overnight stay in Gangtok"
      ],
      accommodation: "3-star hotel in Gangtok",
      meals: "Dinner"
    },
    {
      day: 2,
      title: "Gangtok Local Sightseeing",
      activities: [
        "Early morning breakfast",
        "Visit Rumtek Monastery",
        "Explore Enchey Monastery",
        "Visit Do Drul Chorten",
        "Explore Lal Bazaar",
        "Evening at MG Marg",
        "Dinner and overnight stay in Gangtok"
      ],
      accommodation: "3-star hotel in Gangtok",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      title: "Temi Tea Garden & Namchi",
      activities: [
        "Early morning breakfast",
        "Visit Temi Tea Garden",
        "Tea tasting session",
        "Visit Namchi and Char Dham",
        "Return to Gangtok",
        "Evening at leisure",
        "Dinner and overnight stay in Gangtok"
      ],
      accommodation: "3-star hotel in Gangtok",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      title: "Departure",
      activities: [
        "Morning breakfast",
        "Last minute shopping",
        "Transfer to airport/railway station",
        "End of tour"
      ],
      accommodation: "N/A",
      meals: "Breakfast"
    }
  ];

  const highlights = [
    "Visit the famous Temi Tea Garden",
    "Experience tea tasting session",
    "Explore the vibrant MG Marg",
    "Visit ancient monasteries",
    "Experience local culture and cuisine",
    "Relax in the beautiful tea gardens"
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
        <img src={temiTea} alt="Temi Tea Garden" />
        <div className="hero-overlay">
          <div className="hero-content">
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Packages
            </button>
            <h1>Temi Tea Garden & Gangtok</h1>
            <p>Relax in the beautiful tea gardens and explore Gangtok city</p>
            <div className="package-info">
              <span>Duration: 4 Days / 3 Nights</span>
              <span>Price: ₹9,999</span>
              <span>Difficulty: Easy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="package-content">
          <div className="package-description">
            <h2>About This Package</h2>
            <p>
              Experience the perfect blend of relaxation and exploration with this package that 
              takes you to the famous Temi Tea Garden, the only tea estate in Sikkim. Enjoy a 
              peaceful tea tasting session while surrounded by lush green tea plantations. 
              Explore the vibrant city of Gangtok, visit ancient monasteries, and immerse 
              yourself in the local culture and cuisine.
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
              <img src={temiTea} alt="Temi Tea Garden" />
              <img src={gtk} alt="Gangtok" />
              <img src={urbanSikkim} alt="Urban Sikkim" />
              <img src={lake} alt="Mountain Lake" />
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
            <p>Ready for a relaxing tea garden experience?</p>
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

export default TemiTeaGarden; 