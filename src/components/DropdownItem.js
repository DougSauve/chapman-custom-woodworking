import React from 'react';

import DropdownMenu from './DropdownMenu';

const DropdownItem = props => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  return (
    <div className="dropdown-menu">
      <div
        className="nav-bar__option--anchor-item"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {props.label}
      </div>
      
      {isDropdownOpen
        && <DropdownMenu
          options={props.options}
        />
      }
    </div>
  );
};

export default DropdownItem;