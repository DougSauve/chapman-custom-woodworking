import React from 'react';
import { Redirect, } from 'react-router-dom';

import DropdownAnchor from './DropdownAnchor';

import navBarOptions from './navBarOptions';

import './NavBar.css';

const NavBar = props => {
  const initialRender = React.useRef(true);

  const [renderRedirect, setRenderRedirect] = React.useState(false);
  const [href, setHref] = React.useState(false);
  const [scrollTo, setScrollTo] = React.useState(false);
  
  React.useEffect(() => {
    if (initialRender.current) initialRender.current = false;
    else setRenderRedirect(true);
  }, [scrollTo])

  return (
    <div className="nav-bar">
      {navBarOptions.map(option => (
        option.subMenu
        ? <div
          className="nav-bar__option"
          key={option.label}
        >
          <DropdownAnchor
            href={option.href}
            label={option.label}
            options={option.subMenu}
            wrapperClassName={"nav-bar__option"}
          />
        </div>
        : (
          <div
            className="nav-bar__option"
            key={option.label}
            onClick={() => {
              setHref(option.href);
              setScrollTo(option.label);
            }}
          >
            <span
              className="theme__link nav-bar__option__content"
            >
              {option.label}
            </span>
          </div>
        )
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
}

export default NavBar;