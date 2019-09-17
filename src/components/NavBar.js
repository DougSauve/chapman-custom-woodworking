import React from 'react';

import DropdownItem from './DropdownItem';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className="nav-bar">
      {props.options.map(option => (
        option.submenu
        ? <DropdownItem
          key={option.label}
          label={option.label}
          options={option.subMenu}
        />
        : (
          <div
            className="nav-bar__option"
            key={option.label}  
          >
            {option.label}
          </div>
        )
      ))}
    </div>
  )
}

export default NavBar;