import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <h1>Hotel Booking</h1>
        <div className="navbar-right">
          <Link to="/login" className="signup-button">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="content">
        <h2>Welcome to Our Hotel Booking Platform</h2>
        <p>Book hotels at the best prices and enjoy a wonderful stay.</p>
      </div>
    </div>
  );
};

export default HomePage;
