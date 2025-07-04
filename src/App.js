import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Pages/CartContext';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
// import ProductDetail from './pages/ProductDetail/ProductDetail';
// import Checkout from './pages/Checkout/Checkout';
import './App.css';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <> 
          <div className="app">

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="/shop" element={<Shop />} />
                {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
              <Route path="/Cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;