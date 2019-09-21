import React from 'react';

import './Heading.scss';

const Heading = props => {
  return (
    <div 
      className="heading"
      id={props.text}
    >
      <div className="heading-text">
        {props.text}
      </div>
    </div>
  )
};

export default Heading;