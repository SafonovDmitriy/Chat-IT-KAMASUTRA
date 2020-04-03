import React from 'react';
import s from './DialogList.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {

    let SetDialogs = props.state.ProfilePage.ProfileDate.map(Human  => <DialogItem name={Human.user} activeDialog={props.state.activeDialog} id={Human.id} active={props.state.activeIDUser} SaveActiveDialog={props.SaveActiveDialog}/>)
    return <div className={s.wrapper}>
        {SetDialogs}
    </div>
}
export default DialogList;