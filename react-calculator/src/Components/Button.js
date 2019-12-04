import React from 'react';

import '../styles/button.css'

export const Button = ({val, onClick}) => {

  const isOperator = val => {
    // if it's not a number, return false, but negate it (!) -> return true
    return !isNaN(val) || val === "." || val === "=";
  }

  return (
    <div
      className={`button ${isOperator(val) ? "" :  "operator"}`}
      onClick={() => onClick(val)}>
      {val}
    </div>
  );

};