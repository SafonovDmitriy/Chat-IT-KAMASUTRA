import React from 'react';


import './inputs.css'
const TextBox = (value) => {
  return <input className="TextBox" type="text" value={value} />
};
const StyllButton = (value) => {
  return <input className="StyllButton" type="button" value={value} />
};

export { TextBox, StyllButton }