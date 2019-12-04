import React from 'react';

import '../styles/input.css';

export const Input = props => {
  return (
    <div className="input">
      {props.children}
    </div>
  )
};