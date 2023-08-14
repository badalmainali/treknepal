// src/components/LandingPage.js
import React from 'react';
import './Landing.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="overlay">
        <div className="banner">
          <h2>Welcome to Trip Nepal and Trek Expedition</h2>
        </div>
        <div className="content">
          <h4>Get to amazing destinations in Nepal and Bhutan from us.</h4>
          <button className="explore-button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
