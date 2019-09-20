import React from 'react';

import DropdownMenu from './DropdownMenu';
import './DropdownAnchor.css';

const DropdownAnchor = props => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [pendingTimeOut, setPendingTimeout] = React.useState(null);

  const handleMouseEnter = () => {
    clearTimeout(pendingTimeOut); 
    setPendingTimeout(null); 
    setIsDropdownOpen(true);
  }

  const handleMouseLeave = () => {
    setPendingTimeout(
      setTimeout(
        () => setIsDropdownOpen(false),
        150
      )
    )
  }

  return (
    <div className="dropdown-anchor"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-anchor__content">  
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

export default DropdownAnchor;