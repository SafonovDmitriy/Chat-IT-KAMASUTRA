import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';
import { saveActiveDialogActiveCreator } from './../../../../redux/Reducers/Dialogs-reducer';


const DialogItem = (props) => {
    if (props.state.common.activeIDUser !== props.human.id) {
        const hrefDialog = "/messages/" + props.human.id + "/"
        return <div className={s.wrapper}>
            <NavLink onClick={() => props.dispatch(saveActiveDialogActiveCreator(props.human.id))} className={props.state.common.activeDialog === props.human.id ? s.active : ""} activeClassName={s.active} to={hrefDialog}>{props.human.user}</NavLink>
        </div>
    }
    return '';

}
export default DialogItem;