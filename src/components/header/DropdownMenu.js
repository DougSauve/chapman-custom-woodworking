import React from 'react';
import { Link, } from 'react-router-dom';

import './DropdownMenu.css';

const DropdownMenu = props => (
  <div className="dropdown-menu">
    {props.options.map(option => (
      <div
        className="dropdown-menu__item"
        key={option.label}
      >
        <Link
          className={"theme__link"}
          to={option.href}
        >
          {option.label}
        </Link>
      </div>
    ))}
  </div>
);

export default DropdownMenu;