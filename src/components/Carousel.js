
import React from 'react';
import "./carousel.css";

function Carousel({ scrollToLatestShop }) {
  return (
    <div className="bannerContainer">
      <img className="bannerImage" src="/banners/staticBanner.png" alt="Banner" />
      <div className="contentContainer">
        <h1 className="mainHeading">FIND DEALS THAT FIT IN YOUR BUDGET</h1>
        <p className="desktop_para">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <p className="mobile_para">
          Unlock unbeatable savings - explore the best deal here!
        </p>

        {/* Call the scroll function when clicking the "Shop Now" button */}
        <button className="shopNowCTA" onClick={scrollToLatestShop}>
          Shop Now
        </button>

        <div className="info-container">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;