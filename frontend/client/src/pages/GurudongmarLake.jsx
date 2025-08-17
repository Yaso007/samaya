import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageDetail.css';
import gurudongmarLake from '../assets/gurudongmarlake.jpg';
import lachung from '../assets/lachung.jpg';
import lake3 from '../assets/lake3.jpg';
import moutain from '../assets/moutain.jpg';

const GurudongmarLake = () => {
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
      title: "Lachung to Lachen",
      activities: [
        "Early morning breakfast",
        "Depart for Lachen (2-3 hours drive)",
        "Visit Thangu Valley",
        "Explore local monasteries",
        "Check-in at hotel in Lachen",
        "Evening at leisure",
        "Dinner and overnight stay in Lachen"
      ],
      accommodation: "3-star hotel in Lachen",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      title: "Gurudongmar Lake Expedition",
      activities: [
        "Early morning breakfast",
        "Depart for Gurudongmar Lake (17,800 ft)",
        "Visit the sacred lake",
        "Explore surrounding areas",
        "Return to Lachen",
        "Evening at leisure",
        "Dinner and overnight stay in Lachen"
      ],
      accommodation: "3-star hotel in Lachen",
      meals: "Breakfast, Lunch, Dinner"
    },
    {
      day: 5,
      title: "Return to Gangtok & Departure",
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
    "Visit one of the highest lakes in the world at 17,800 ft",
    "Explore the sacred Gurudongmar Lake",
    "Experience the pristine Thangu Valley",
    "Stay in the remote village of Lachen",
    "Witness breathtaking mountain vistas",
    "Visit ancient monasteries"
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
        <img src={gurudongmarLake} alt="Gurudongmar Lake" />
        <div className="hero-overlay">
          <div className="hero-content">
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Packages
            </button>
            <h1>Gurudongmar Lake Expedition</h1>
            <p>Journey to one of the highest lakes in the world at 17,800 ft</p>
            <div className="package-info">
              <span>Duration: 5 Days / 4 Nights</span>
              <span>Price: ₹18,999</span>
              <span>Difficulty: Challenging</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="package-content">
          <div className="package-description">
            <h2>About This Package</h2>
            <p>
              Embark on an extraordinary expedition to Gurudongmar Lake, one of the highest lakes 
              in the world at an altitude of 17,800 feet. This sacred lake holds immense religious 
              significance and offers unparalleled views of the snow-capped Himalayas. The journey 
              takes you through the pristine Thangu Valley and the remote village of Lachen, 
              providing a truly authentic Himalayan experience.
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
              <img src={gurudongmarLake} alt="Gurudongmar Lake" />
              <img src={lachung} alt="Lachung Village" />
              <img src={lake3} alt="Mountain Lake" />
              <img src={moutain} alt="Himalayan Mountains" />
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
            <p>Ready for the ultimate Himalayan expedition?</p>
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

export default GurudongmarLake; 