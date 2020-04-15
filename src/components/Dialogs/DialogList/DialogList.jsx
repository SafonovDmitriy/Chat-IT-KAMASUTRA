import React from 'react';
import s from './DialogList.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    return <div className={s.wrapper}>
        {props.common.ProfileDate.map(human => <DialogItem human={human} state={props.common} saveActiveDialogActiveCreator={props.saveActiveDialogActiveCreator} />)}
    </div>
}
export default DialogList;