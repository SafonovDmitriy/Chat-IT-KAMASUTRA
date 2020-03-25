import React from 'react';


import s from './SideBar.module.css'
const SideBar = () => {
  return <div className={s.wrapper}>
    <ul>
      <li><a className={s.active} href="#1">Profile</a></li>
      <li><a href="#2">Messages</a></li>
      <li><a href="#3">News</a></li>
      <li><a href="#4">Music</a></li>
      <li><a href="#5">Setting</a></li>
    </ul>
  </div>
};
export default SideBar