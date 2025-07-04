import React from 'react';
import { products } from './products';
import ProductCard from '../Pages/ProductCard';
import './BestSellers.css';
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {

    const navigate = useNavigate();

  const bestSellers = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="best-sellers">
      <div className="section-header">
        <h2>Our Best Sellers</h2>
        <p style={{ color: '#D97706' }}>Most loved treats by our customers</p>
      </div>

      <div className="marquee-container">
        <div className="products-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="best-seller-card"
            />
          ))}
        </div>
      </div>

      <div className="view-all">
        <button                       // navigate("/cart"); // Or keep as "/login" if you prefer
          onClick={() => navigate("/shop")}   className="view-all-btn">View All Products</button>
      </div>
    </section>
  );
};

export default BestSellers;