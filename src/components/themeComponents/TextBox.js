import React from 'react';

import './TextBox.scss';

const TextBox = props => {
  return (
    <div 
      className="text-box--full-width"
    >
      <div className="text-box__text">
        {props.text}
      </div>
    </div>
  )
}

export default TextBox;