import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TourPackages.css';
import nathulaPass from '../assets/nathula pass.jpg';
import yumthang from '../assets/yumthang.jpg';
import gurudongmarLake from '../assets/gurudongmarlake.jpg';
import kanchen from '../assets/kanchen.jpg';
import temiTea from '../assets/temi-tea.jpg';
import yak from '../assets/yak.jpg';

const TourPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "Nathula Pass Adventure",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      image: nathulaPass,
      description: "Experience the thrill of visiting the Indo-China border at 14,140 ft",
      highlights: ["Nathula Pass", "Tsomgo Lake", "Baba Harbhajan Singh Temple"],
      path: "/nathula-pass"
    },
    {
      id: 2,
      name: "Yumthang Valley & Lachung",
      duration: "4 Days / 3 Nights",
      price: "₹15,999",
      image: yumthang,
      description: "Explore the Valley of Flowers and the pristine beauty of North Sikkim",
      highlights: ["Yumthang Valley", "Lachung", "Zero Point", "Hot Springs"],
      path: "/yumthang-valley"
    },
    {
      id: 3,
      name: "Gurudongmar Lake Expedition",
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      image: gurudongmarLake,
      description: "Journey to one of the highest lakes in the world at 17,800 ft",
      highlights: ["Gurudongmar Lake", "Lachung", "Lachen", "Thangu Valley"],
      path: "/gurudongmar-lake"
    },
    {
      id: 4,
      name: "Kanchenjunga Base Camp",
      duration: "6 Days / 5 Nights",
      price: "₹22,999",
      image: kanchen,
      description: "Trek to the base of the world's third highest peak",
      highlights: ["Kanchenjunga Base Camp", "Dzongri", "Goecha La", "Trekking"],
      path: "/kanchenjunga-base-camp"
    },
    {
      id: 5,
      name: "Temi Tea Garden & Gangtok",
      duration: "3 Days / 2 Nights",
      price: "₹9,999",
      image: temiTea,
      description: "Relax in the beautiful tea gardens and explore Gangtok city",
      highlights: ["Temi Tea Garden", "Gangtok City", "MG Marg", "Rumtek Monastery"],
      path: "/temi-tea-garden"
    },
    {
      id: 6,
      name: "Yak Safari & Mountain Lakes",
      duration: "4 Days / 3 Nights",
      price: "₹14,999",
      image: yak,
      description: "Experience yak riding and visit pristine mountain lakes",
      highlights: ["Yak Safari", "Snow Lake", "Mountain Lakes", "Local Culture"],
      path: "/yak-safari"
    }
  ];

  const handlePackageClick = (packagePath) => {
    navigate(packagePath);
  };

  return (
    <section className="tour-packages" id="packages">
      <div className="container">
        <div className="section-header">
          <h2>Our Tour Packages</h2>
          <p>Discover the best of Sikkim with our carefully curated packages</p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card" onClick={() => handlePackageClick(pkg.path)}>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
                <div className="package-overlay">
                  <span className="package-price">{pkg.price}</span>
                </div>
              </div>
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <div className="package-duration">{pkg.duration}</div>
                <div className="package-description">{pkg.description}</div>
                <div className="package-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages; 