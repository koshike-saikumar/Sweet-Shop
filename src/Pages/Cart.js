import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, setCart } = useContext(CartContext);

  // Calculate total price of all items in cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Group items by product ID and count quantities
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
                      // Remove all instances of this item
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
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;