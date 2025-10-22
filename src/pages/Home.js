import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Find Your <span className="gradient-text">Dream Home</span> in Hyderabad
            </h1>
            <p className="hero-subtitle fade-in-up">
              Premium properties with world-class amenities in the heart of Hyderabad
            </p>
            <div className="hero-buttons fade-in-up">
              <Link to="/properties" className="btn btn-primary">
                <i className="fas fa-search"></i> Explore Properties
              </Link>
              <a href="#about" className="btn btn-secondary">
                <i className="fas fa-play"></i> Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <i className="fas fa-home"></i>
              <h3>Premium Properties</h3>
              <p>Luxury living awaits</p>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Properties Sold</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* About Owner Section */}
      <section id="about" className="about-owner">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle">Leading the real estate revolution in Hyderabad</p>
          </div>
          
          <div className="owner-profile">
            <div className="owner-image">
              <div className="image-container">
                <div className="owner-photo">
                  <i className="fas fa-user"></i>
                </div>
                <div className="experience-badge">
                  <span>15+ Years</span>
                </div>
              </div>
            </div>
            
            <div className="owner-details">
              <h3 className="owner-name"> Chandra Sekhar Reddy Jitta</h3>
              <p className="owner-title">Founder & CEO, Swayam Krushi (SK) Developers</p>
              
              <div className="owner-info">
                <div className="info-item">
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <h4>Education</h4>
                    <p>MBA in Real Estate Management, IIM Bangalore</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-briefcase"></i>
                  <div>
                    <h4>Experience</h4>
                    <p>15+ years in real estate development and sales</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-trophy"></i>
                  <div>
                    <h4>Achievements</h4>
                    <p>Best Real Estate Agent 2023, Hyderabad</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-handshake"></i>
                  <div>
                    <h4>Specialization</h4>
                    <p>Luxury villas, premium apartments, and commercial properties</p>
                  </div>
                </div>
              </div>
              
              <div className="owner-quote">
                <blockquote>
                  "My mission is to help families find not just a house, but a home where memories are made and dreams come true."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Swayam Krushi (SK) Developers?</h2>
            <p className="section-subtitle">We make your property dreams a reality</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3>Prime Locations</h3>
              <p>Properties in the most sought-after areas of Hyderabad</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Verified Properties</h3>
              <p>All properties are thoroughly verified and legal</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support for all your needs</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with transparent cost breakdown</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Property?</h2>
            <p>Join thousands of satisfied customers who found their perfect home with us</p>
            <Link to="/properties" className="btn btn-primary btn-large">
              <i className="fas fa-home"></i> Start Your Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
