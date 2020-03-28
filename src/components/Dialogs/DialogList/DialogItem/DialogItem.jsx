import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const hrefDialog="/messages/"+props.name
    return <div className={s.wrapper}>
       <NavLink activeClassName={s.active} to={hrefDialog}>{props.name}</NavLink> 
    </div>
}
export default DialogItem;