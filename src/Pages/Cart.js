import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, setCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    pincode: '',
    phone: '',
    city: '',
    state: '',
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const getGroupedItems = () => {
    const grouped = {};
    cart.forEach(item => {
      if (!grouped[item.id]) {
        grouped[item.id] = { ...item, quantity: 0 };
      }
      grouped[item.id].quantity += 1;
    });
    return Object.values(grouped);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Request Body:", formData);

    setShowModal(false);        // Close the form modal
    setShowSuccess(true);       // Show success popup

    // Redirect after 2.5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/shop");
    }, 3000);
  };

  const groupedItems = getGroupedItems();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Sweet Cart</h2>
        {cart.length > 0 && (
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart" />
          <p>Your cart is empty</p>
          <p>Add some sweet treats to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {groupedItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="item-total">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => {
                      const newCart = cart.filter(cartItem => cartItem.id !== item.id);
                      setCart(newCart);
                    }}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkout-btn" onClick={() => setShowModal(true)}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Sweet Shipping Details 🍬</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <form onSubmit={handleCheckoutSubmit} className="checkout-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" placeholder="John Candy" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" placeholder="123 Sugar Lane" required onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="Chocolate Town" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" placeholder="Candyland" required onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Pincode</label>
                  <input type="text" name="pincode" placeholder="123456" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" name="phone" placeholder="+1 234 567 890" required onChange={handleChange} />
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="submit-btn">
                  Place Sweet Order 🍫
                </button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                  Not So Sweet? Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="modal-overlayy">
          <div className="modal-contentt">
            <div className="confetti-container">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="confetti" style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 75%)`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }} />
              ))}
            </div>

            <div className="success-animation">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>

              <div className="sweet-icon">🍬🍫🍭</div>
            </div>

            <h2 className="success-title">Sweet Success!</h2>
            <p className="success-message">
              Your delicious order is being prepared with love!<br />
              Expect a sugar rush in 2-3 business days.
            </p>

            {/* <button
              className="continue-btn"
              onClick={() => setShowModal(false)}
            >
              Continue Shopping
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
