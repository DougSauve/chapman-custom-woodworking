import React from 'react';

const DropdownMenu = props => (
  <div className="dropdown-menu">
    {props.options.map(option => (
      <div
        className="dropdown-menu__item"
        key={option.label}
        onClick={console.log('to', option.href)}
      >
        {option.label}
      </div>
    ))}
  </div>
);

export default DropdownMenu;