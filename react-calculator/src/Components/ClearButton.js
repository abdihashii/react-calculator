import React from 'react';

import '../styles/clearButton.css';

export const ClearButton = ({onClick: clear}) => {
  return (
    <div className="clearButton" onClick={clear}>
      clear
    </div>
  )
};