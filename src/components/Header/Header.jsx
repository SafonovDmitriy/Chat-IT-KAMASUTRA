import React from 'react';
import s from './Header.module.css'


const Header = () => {
  return <div className={s.wrapper}>
    <img alt="" src="https://volkland.com.ua/sites/all/themes/volkland/logo.png" />

    <div className={s.headerMenu}><ul>
      <li><a href="#1">Item1</a></li>
      <li><a href="#2">Item2</a></li>
      <li><a href="#3">Item3</a></li>
      <li><a href="#4">Item4</a></li>
      <li><a href="#5">Item5</a></li>
    </ul></div>
  </div>
};
export default Header