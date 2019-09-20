import React from 'react';

import './HomePage.css';

const HomePage = props => (
  <div className="home-page">
    <div className="home-page__image-container">
      <img
        alt="A warm kitchen with beautiful wooden cabinets."
        className="home-page__image"
        src="./assets/kitchen_pic.jpeg"
      />
    </div>
  </div>
);

export default HomePage;