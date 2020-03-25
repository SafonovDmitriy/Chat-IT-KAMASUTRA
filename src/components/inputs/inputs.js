import React from 'react';


import s from './inputs.module.css'
const TextBox = (value) => {
  return <input className={s.TextBox} type="text" placeholder={value} />
};
const StyllButton = (value) => {
  return <input className={s.StyllButton} type="button" placeholder={value} />
};

export { TextBox, StyllButton }