import React from 'react';
import s from './DialogList.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    return <div className={s.wrapper}>
        {props.state.ProfilePage.ProfileDate.map(human => <DialogItem human={human} state={props.state} dispatch={props.dispatch} />)}
    </div>
}
export default DialogList;