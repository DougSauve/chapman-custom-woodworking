import React from 'react';

import './Heading.scss';

const Heading = props => {
  return (
    <div className="heading">
      <div className="heading-text">
        {props.text}
      </div>
    </div>
  )
};

export default Heading;