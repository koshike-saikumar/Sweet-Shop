import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {

  const navigate= useNavigate();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-footer">
        <span style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '20px',
                color: '#D97706',
                fontStyle: 'italic'
              }} className="price">₹{product.price.toFixed(2)}</span>
        <button onClick={() => navigate("/login")} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;