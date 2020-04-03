import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    
    let SaveActive = () => {
        props.SaveActiveDialog(props.id)
    }

    if (props.active !== props.id) {
        const hrefDialog = "/messages/" + props.id + "/"
        return <div className={s.wrapper}>
            <NavLink onClick={SaveActive} className={props.activeDialog === props.id ? s.active : ""} activeClassName={s.active} to={hrefDialog}>{props.name}</NavLink>
        </div>
    }
    return '';

}
export default DialogItem;