import React from 'react';
import { Link, } from 'react-router-dom';

import DropdownAnchor from './DropdownAnchor';

import navBarOptions from './navBarOptions';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className="nav-bar">
      {navBarOptions.map(option => (
        option.subMenu
        ? 
        <Link
          className="theme__link"
          key={option.label}
          to='/'
        >
          <DropdownAnchor
            label={option.label}
            options={option.subMenu}
            wrapperClassName={"nav-bar__option"}
          />
        </Link>
        : (
          <div
            className="nav-bar__option"
            key={option.label}  
          >
            <Link
              className="theme__link nav-bar__option__content"
              to={option.href}
            >
              {option.label}
            </Link>
          </div>
        )
      ))}
    </div>
  )
}

export default NavBar;