import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Delicious Sweets for Every Occasion</h1>
        <p>Handcrafted with love and the finest ingredients</p>
        <Link to="/shop" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default Banner;