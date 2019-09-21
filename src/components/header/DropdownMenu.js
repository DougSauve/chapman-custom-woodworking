import React from 'react';
import { Redirect, } from 'react-router-dom';

import './DropdownMenu.css';

const DropdownMenu = props => {
  const initialRender = React.useRef(true);

  const [renderRedirect, setRenderRedirect] = React.useState(false);
  const [href, setHref] = React.useState(false);
  const [scrollTo, setScrollTo] = React.useState(false);
  
  React.useEffect(() => {
    if (initialRender.current) initialRender.current = false;
    else setRenderRedirect(true);
  }, [scrollTo])

  return (
    <div className="dropdown-menu">
      {props.options.map(option => (
        <div
          className="dropdown-menu__item"
          key={option.label}
          onClick={() => {
            setHref(option.href);
            setScrollTo(option.label);
          }}
        >
          <span
            className={"theme__link"}
          >
            {option.label}
          </span>
        </div>
      ))}

      {renderRedirect
        && <Redirect
          to={{
            pathname: href, 
            state: {
              scrollTo,
            }
          }}
        />
      }
    </div>
  )
};

export default DropdownMenu;