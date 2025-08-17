import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageDetail.css';
import yumthang from '../assets/yumthang.jpg';
import lachung from '../assets/lachung.jpg';
import snowylake from '../assets/snowylake.jpg';
import lake2 from '../assets/lake2.jpg';

const YumthangValley = () => {
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
      title: "Gangtok to Lachung",
      activities: [
        "Early morning breakfast",
        "Depart for Lachung (6-7 hours drive)",
        "En route visit Singhik Viewpoint",
        "Visit Seven Sisters Waterfall",
        "Check-in at hotel in Lachung",
        "Evening at leisure",
        "Dinner and overnight stay in Lachung"
      ],
      accommodation: "3-star hotel in Lachung",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      title: "Yumthang Valley & Zero Point",
      activities: [
        "Early morning breakfast",
        "Visit Yumthang Valley (Valley of Flowers)",
        "Explore Zero Point (15,300 ft)",
        "Visit Hot Springs",
        "Return to Lachung",
        "Evening at leisure",
        "Dinner and overnight stay in Lachung"
      ],
      accommodation: "3-star hotel in Lachung",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      title: "Lachung to Gangtok & Departure",
      activities: [
        "Morning breakfast",
        "Return journey to Gangtok",
        "Visit MG Marg",
        "Explore local markets",
        "Transfer to airport/railway station",
        "End of tour"
      ],
      accommodation: "N/A",
      meals: "Breakfast"
    }
  ];

  const highlights = [
    "Explore the Valley of Flowers at 11,800 ft",
    "Visit Zero Point at 15,300 ft",
    "Experience the pristine beauty of North Sikkim",
    "Relax in natural hot springs",
    "Witness breathtaking waterfalls",
    "Stay in the charming village of Lachung"
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
        <img src={yumthang} alt="Yumthang Valley" />
        <div className="hero-overlay">
          <div className="hero-content">
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Packages
            </button>
            <h1>Yumthang Valley & Lachung</h1>
            <p>Explore the Valley of Flowers and the pristine beauty of North Sikkim</p>
            <div className="package-info">
              <span>Duration: 4 Days / 3 Nights</span>
              <span>Price: ₹15,999</span>
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
              Discover the enchanting Yumthang Valley, often called the "Valley of Flowers" due to 
              its stunning rhododendron blooms. This package takes you to the pristine landscapes 
              of North Sikkim, including the charming village of Lachung and the breathtaking 
              Zero Point. Experience the untouched beauty of the Himalayas with visits to hot 
              springs, waterfalls, and panoramic viewpoints.
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
              <img src={yumthang} alt="Yumthang Valley" />
              <img src={lachung} alt="Lachung Village" />
              <img src={snowylake} alt="Snow Lake" />
              <img src={lake2} alt="Mountain Lake" />
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
            <p>Ready to explore the Valley of Flowers?</p>
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

export default YumthangValley; 