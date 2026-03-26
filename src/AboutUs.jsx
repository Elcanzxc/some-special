import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">Welcome to Paradise Nursery, where green dreams come true!</p>
      
      <div className="about-us-content">
        <p>
          At Paradise Nursery, we believe that every home deserves a touch of nature. 
          Our mission is to provide high-quality, vibrant plants that not only beautify 
          your living space but also improve your well-being and air quality.
        </p>
        <p>
          Our team of dedicated botanists and plant lovers carefully nurtures each plant, 
          ensuring they are healthy and ready to thrive in their new homes. From 
          low-maintenance succulents to elegant indoor trees, we have something for everyone.
        </p>
        <p>
          Join us in our journey to make the world a greener place, one plant at a time. 
          Thank you for choosing Paradise Nursery for your botanical needs!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
