import React from 'react';

import DropdownAnchor from './DropdownAnchor';

import navBarOptions from './navBarOptions';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className="nav-bar">
      {navBarOptions.map(option => (
        option.subMenu
        ? <DropdownAnchor
          key={option.label}
          label={option.label}
          options={option.subMenu}
          wrapperClassName={"nav-bar__option"}
        />
        : (
          <div
            className="nav-bar__option"
            key={option.label}  
          >
            <div
              className="nav-bar__option__content"
            >
              {option.label}
            </div>
          </div>
        )
      ))}
    </div>
  )
}

export default NavBar;