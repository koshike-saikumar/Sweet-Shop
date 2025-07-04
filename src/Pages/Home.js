import React from 'react';
import Banner from '../Components/Banner';
import './Home.css';
import BestSellers from '../Components/BestSellers';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Home = () => {
    return (<>
    <Header />
        <div >
            <Banner />
            <BestSellers />

            <section className="featured-section">
                <h2  style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '40px',
                color: '#7f3d54',
                fontStyle: 'italic'
              }} >Our Featured Treats</h2>
                <p>Discover our most popular sweet creations</p>
                <div className="featured-grid">
                    <div className="featured-item">
                        <h3>Seasonal Specials</h3>
                        <p>Limited-time flavors for every season</p>
                    </div>
                    <div className="featured-item">
                        <h3>Custom Orders</h3>
                        <p>Personalized sweets for your special occasions</p>
                    </div>
                    <div className="featured-item">
                        <h3>Gift Boxes</h3>
                        <p>Beautifully packaged sweet gifts</p>
                    </div>
                </div>
            </section>
                        <Footer />

        </div>
        </>
    );
};

export default Home;