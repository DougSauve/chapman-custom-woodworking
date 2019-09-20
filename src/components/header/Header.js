import React from 'react';

import NavBar from './NavBar';

import './Header.css';

const Header = props => (
  <>
    <div className="header">
      <div className="header__title">
        {"Chapman Custom Woodworking"}
      </div>

      <NavBar />
    </div>
  </>
)

export default Header;