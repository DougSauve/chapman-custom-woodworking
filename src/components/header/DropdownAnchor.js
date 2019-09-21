import React from 'react';
import { Redirect, } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import './DropdownAnchor.scss';

const DropdownAnchor = props => {
  const [renderRedirect, setRenderRedirect] = React.useState(false);
  const [href, setHref] = React.useState(null); 

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
    <div className={props.wrapperClassName}>
      <div className="dropdown-anchor"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <div 
          className="dropdown-anchor__content" 
          onClick={() => {
            setHref(props.href);
            setRenderRedirect(true);
          }}
        >  
          {props.label}
        </div>
        
        {isDropdownOpen
          && <DropdownMenu
            options={props.options}
          />
        }

        {renderRedirect
          && <Redirect
            to={href}
          />
        }
      </div>
    </div>
  );
};

export default DropdownAnchor;