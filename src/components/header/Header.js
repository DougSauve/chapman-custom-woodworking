import React from 'react';
import { Link, } from 'react-router-dom'; 

import NavBar from './NavBar';

import './Header.scss';

const Header = props => (
  <>
    <div className="header">
      <Link 
        className="theme__link header__title"
        to='/'
      >
        {"Chapman Custom Woodworking"}
      </Link>

      <NavBar />
    </div>
  </>
)

export default Header;