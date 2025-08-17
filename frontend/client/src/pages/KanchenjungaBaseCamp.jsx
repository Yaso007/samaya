import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageDetail.css';
import kanchen from '../assets/kanchen.jpg';
import moutain from '../assets/moutain.jpg';
import lake2 from '../assets/lake2.jpg';
import lake3 from '../assets/lake3.jpg';

const KanchenjungaBaseCamp = () => {
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
      title: "Gangtok to Yuksom",
      activities: [
        "Early morning breakfast",
        "Depart for Yuksom (5-6 hours drive)",
        "En route visit Namchi",
        "Check-in at hotel in Yuksom",
        "Evening briefing about trek",
        "Dinner and overnight stay in Yuksom"
      ],
      accommodation: "3-star hotel in Yuksom",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      title: "Yuksom to Sachen",
      activities: [
        "Early morning breakfast",
        "Start trek to Sachen (7 km, 4-5 hours)",
        "Pass through dense forests",
        "Camp at Sachen",
        "Evening at leisure",
        "Dinner and overnight stay in camp"
      ],
      accommodation: "Trekking camp",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      title: "Sachen to Tshoka",
      activities: [
        "Early morning breakfast",
        "Trek to Tshoka (8 km, 5-6 hours)",
        "Gradual ascent through rhododendron forests",
        "Camp at Tshoka",
        "Evening at leisure",
        "Dinner and overnight stay in camp"
      ],
      accommodation: "Trekking camp",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 5,
      title: "Tshoka to Dzongri",
      activities: [
        "Early morning breakfast",
        "Trek to Dzongri (6 km, 4-5 hours)",
        "Steep ascent to Dzongri La",
        "Panoramic views of Kanchenjunga",
        "Camp at Dzongri",
        "Dinner and overnight stay in camp"
      ],
      accommodation: "Trekking camp",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 6,
      title: "Dzongri to Goecha La & Return",
      activities: [
        "Early morning start",
        "Trek to Goecha La (8 km, 6-7 hours)",
        "Witness sunrise over Kanchenjunga",
        "Return to Dzongri",
        "Evening at leisure",
        "Dinner and overnight stay in camp"
      ],
      accommodation: "Trekking camp",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 7,
      title: "Return to Yuksom",
      activities: [
        "Morning breakfast",
        "Return trek to Yuksom",
        "Check-in at hotel",
        "Evening at leisure",
        "Dinner and overnight stay in Yuksom"
      ],
      accommodation: "3-star hotel in Yuksom",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 8,
      title: "Return to Gangtok & Departure",
      activities: [
        "Morning breakfast",
        "Return journey to Gangtok",
        "Visit MG Marg",
        "Transfer to airport/railway station",
        "End of tour"
      ],
      accommodation: "N/A",
      meals: "Breakfast"
    }
  ];

  const highlights = [
    "Trek to the base of the world's third highest peak",
    "Witness sunrise over Kanchenjunga from Goecha La",
    "Explore the pristine Dzongri region",
    "Experience high-altitude trekking",
    "Camp in the heart of the Himalayas",
    "Visit the historic Yuksom village"
  ];

  const inclusions = [
    "Accommodation in hotels and trekking camps",
    "All meals during trek",
    "Transport in comfortable vehicle",
    "Trekking permits and entry fees",
    "Professional trekking guide and porters",
    "Trekking equipment and camping gear"
  ];

  const exclusions = [
    "Airfare/Train fare",
    "Personal expenses",
    "Tips and gratuities",
    "Any additional activities",
    "Travel insurance",
    "Personal trekking gear"
  ];

  return (
    <div className="package-detail">
      <div className="package-hero">
        <img src={kanchen} alt="Kanchenjunga Base Camp" />
        <div className="hero-overlay">
          <div className="hero-content">
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Packages
            </button>
            <h1>Kanchenjunga Base Camp</h1>
            <p>Trek to the base of the world's third highest peak</p>
            <div className="package-info">
              <span>Duration: 8 Days / 7 Nights</span>
              <span>Price: ₹22,999</span>
              <span>Difficulty: Difficult</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="package-content">
          <div className="package-description">
            <h2>About This Package</h2>
            <p>
              Embark on an epic trek to the base of Kanchenjunga, the world's third highest peak 
              at 8,586 meters. This challenging trek takes you through pristine forests, alpine 
              meadows, and high-altitude passes to reach Goecha La, offering breathtaking views 
              of the majestic Kanchenjunga massif. Experience the thrill of high-altitude trekking 
              while camping in the heart of the Himalayas.
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
              <img src={kanchen} alt="Kanchenjunga" />
              <img src={moutain} alt="Himalayan Mountains" />
              <img src={lake2} alt="Alpine Lake" />
              <img src={lake3} alt="Mountain Lake" />
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
            <p>Ready for the ultimate trekking adventure?</p>
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

export default KanchenjungaBaseCamp; 