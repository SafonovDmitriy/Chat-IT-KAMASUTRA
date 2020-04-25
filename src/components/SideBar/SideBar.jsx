import React from 'react';


import s from './SideBar.module.css'
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {

  return <div className={s.wrapper}>
    <ul>
      {props.sideBar.map((item) => <NavLink key={item.id} onClick={props.updateUrlActive} to={props.activeDialog !== -1 &&item.href==="/messages/"? item.href + props.activeDialog : item.href} activeClassName={s.active}><li>{item.title}</li></NavLink>)}
    </ul>
  </div>
};
export default SideBar