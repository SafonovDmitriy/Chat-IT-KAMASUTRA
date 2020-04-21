import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    if (props.state.activeIDUser !== props.human.id) {


        return <div className={s.wrapper}>


            <NavLink
                onClick={() => props.saveActiveDialogActiveCreator(props.human.id)}
                className={props.state.activeDialog === props.human.id ? s.active : ""}
                activeClassName={s.active}
                to={"/messages/" + props.human.id+"/"}>
                <li>{props.human.user} </li>
            </NavLink>

        </div>
    }

    return '';

}
export default DialogItem;