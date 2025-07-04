import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';
import './Header.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1 style={{ fontFamily: "'Italianno', cursive" }}>Dolce Vita</h1>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '20px',
                color: '#D97706',
                fontStyle: 'italic'
              }}

              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link" style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '20px',
                color: '#D97706',
                fontStyle: 'italic'
              }}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '20px',
                color: '#D97706',
                fontStyle: 'italic'
              }}>
                CONTACT
                {/* ({cart.length}) */}
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link" title="Cart">
                <FaShoppingCart size={25} color="#D97706" />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link" title="Login">
                <FaUser size={25} color="#D97706" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;