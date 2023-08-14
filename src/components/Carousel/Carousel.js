// src/components/AnimatedCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/Carousel.css'; // Create this file for styling

const AnimatedCarousel = ({ images }) => {
  return (
    
    <Carousel autoPlay infiniteLoop showStatus={false}>
        
      {images.map((imageInfo, index) => (
        <div key={index} className="carousel-slide">
          <img src={imageInfo.url} alt={`Slide ${index}`} />
          <div className="carousel-caption">
            <h2>{imageInfo.name}</h2>
            <p>{imageInfo.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default AnimatedCarousel;
