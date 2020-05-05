import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return <div className={s.wrapper}>
    <img alt="" src="https://volkland.com.ua/sites/all/themes/volkland/logo.png" />

    <div className={s.headerMenu}><ul>
      <a href="/#1"><li>Item1</li></a>
      <a href="/#2"><li>Item2</li></a>
      <a href="/#3"><li>Item3</li></a>
      <a href="/#4"><li>Item4</li></a>
      <a href="/#5"><li>Item5</li></a>
    </ul></div>
    
    
    {
      props.activeIDUser===null?<div><NavLink className={s.loginBlock} to="/login/">Login</NavLink></div>:<div className={s.loginBlock}>You`r ID is {props.activeIDUser}</div>
    }
    
  </div>
};
export default Header