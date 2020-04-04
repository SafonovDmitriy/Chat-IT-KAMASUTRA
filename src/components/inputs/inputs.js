import React from 'react';
import s from './inputs.module.css'

const TextBox = (props) => {
  return <input className={s.TextBox} type="text" value={props.value} placeholder={props.placeholder} ref={props.refs} onChange={props.onChange}/>
  
};
const StyllButton = (props) => {
  return <input className={s.StyllButton} type="button" value={props.value} onClick={props.onClick}/>
};

export { TextBox, StyllButton }