import React from 'react';


import s from './inputs.module.css'
const TextBox = (props) => {
  return <input className={s.TextBox} type="text" placeholder={props.value} />
};
const StyllButton = (props) => {
  return <input className={s.StyllButton} type="button" value={props.value} />
};

export { TextBox, StyllButton }