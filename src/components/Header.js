import React from 'react';

import NavBar from './NavBar';

import './Header.css';

const Header = props => (
  <>
    <div className="header">
      <div className="header__title">
        {props.title}
      </div>

      <NavBar
        options={props.navBarOptions}
      />
    </div>
  </>
)

export default Header;