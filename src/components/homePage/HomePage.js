import React from 'react';

import TextBox from '../themeComponents/TextBox';
import Heading from '../themeComponents/Heading';

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

    <Heading
      text="Our Story"
    />

    <TextBox 
      text="We are a really cool couple and you should buy our stuff. Where are my glasses?"
    />

    <div className="theme__end-of-page-spacer" />
  </div>
);

export default HomePage;