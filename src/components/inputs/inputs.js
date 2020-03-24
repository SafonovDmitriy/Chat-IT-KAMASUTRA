import React from 'react';


import './inputs.css'
const TextBox = (value) => {
  return <input className="TextBox" type="text" placeholder={value} />
};
const StyllButton = (value) => {
  return <input className="StyllButton" type="button" placeholder={value} />
};

export { TextBox, StyllButton }