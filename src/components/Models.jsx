import React, { useState, useEffect, useRef } from "react";
import "./Models.css";
// Import all Porsche model images
import pic1 from "./911 1.webp";
import pic2 from "./718 1.avif";
import pic3 from "./taycan 1.avif";
import pic4 from "./cayenne 1.webp";
import pic5 from "./macan 1.webp";

const CarModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const mockData = [
          {
            id: 1,
            name: "911 Turbo S",
            price: "$203,500",
            horsepower: "640 HP",
            acceleration: "2.6s 0-60",
            topSpeed: "205 mph",
            imageUrl: pic1
          },
          {
            id: 2,
            name: "718 Cayman GT4",
            price: "$101,200",
            horsepower: "414 HP",
            acceleration: "4.2s 0-60",
            topSpeed: "188 mph",
            imageUrl: pic2
          },
          {
            id: 3,
            name: "Taycan Turbo S",
            price: "$190,900",
            horsepower: "750 HP",
            acceleration: "2.6s 0-60",
            topSpeed: "161 mph",
            imageUrl: pic3
          },
          {
            id: 4,
            name: "Cayenne Turbo GT",
            price: "$180,800",
            horsepower: "631 HP",
            acceleration: "3.1s 0-60",
            topSpeed: "186 mph",
            imageUrl: pic4
          },
          {
            id: 5,
            name: "Macan GTS",
            price: "$81,900",
            horsepower: "434 HP",
            acceleration: "4.3s 0-60",
            topSpeed: "169 mph",
            imageUrl: pic5
          }
        ];
        setModels(mockData);
      } catch (error) {
        console.error("Error fetching models:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);
   

  if (loading) return (
    <div className="loading-spinner">
      <div className="porsche-spinner"></div>
      <p>Loading Porsche models...</p>
    </div>
  );

  return (
    <section className="car-models">
      <div className="models-header">
        <h2>Porsche Lineup</h2>
        <p>Discover your dream machine</p>
        <div className="slider-controls">
          <button onClick={scrollLeft} className="slider-button" aria-label="Scroll left">
            <span className="arrow-icon">←</span>
          </button>
          <button onClick={scrollRight} className="slider-button" aria-label="Scroll right">
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
      
      <div className="models-container">
        <div className="models-slider" ref={sliderRef}>
          {models.map((model) => (
            <ModelCard key={model.id} data={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModelCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`model-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img 
          src={data.imageUrl} 
          alt={`Porsche ${data.name}`} 
          loading="lazy"  
        />
        <div className="overlay"></div>
        <div className="model-name">{data.name}</div>
      </div>
      <div className="card-content">
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Price</span>
            <span className="spec-value">{data.price}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Power</span>
            <span className="spec-value">{data.horsepower}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">0-60 mph</span>
            <span className="spec-value">{data.acceleration}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Top Speed</span>
            <span className="spec-value">{data.topSpeed}</span>
          </div>
        </div>
        <button className="cta-button">
          <span>Configure</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default CarModels;