import React, { useContext } from 'react';
import { products } from '../Components/products'; // Note: 'products' not 'product'
import { CartContext } from './CartContext';
import './Shop.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
// import { useNavigate } from 'react-router-dom';
import { Toast } from '../utils/toast';


const Shop = () => {
  const { addToCart } = useContext(CartContext);
  // const navigate = useNavigate();
  
  return (
    <>
      <Header />
      <div className="shop-container">
        <div className="shop-header">
          <h1 className="shop-title">Our Sweet Selection</h1>
          <p className="shop-description">
            Indulge in our handcrafted delights made with love and the finest ingredients
          </p>
        </div>

        <div className="products-gridd">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '20px',
                color: '#D97706',
                fontStyle: 'italic'
              }}className="price">₹{product.price.toFixed(2)}</span>
                  <button
                    onClick={() => {
                      addToCart(product);
                      Toast.success('Item added to cart!');

                      // navigate("/cart"); // Or keep as "/login" if you prefer
                    }}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;