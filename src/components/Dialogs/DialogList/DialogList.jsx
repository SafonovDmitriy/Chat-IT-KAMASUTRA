import React from 'react';
import s from './DialogList.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    
    let SetDialogs = props.DialogData.map(Human => <DialogItem name={Human.name} />)
    return <div className={s.wrapper}>
        {SetDialogs}
    </div>
}
export default DialogList;