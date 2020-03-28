import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';


const Dialogs = (props) => {
    return <div className={s.wrapper}>
        <DialogList className={s.NamesList} DialogData={props.DialogePage.DialogData} />
        <MessageList className={s.MessageList} arrMessage={props.DialogePage.arrMessage} />
    </div>
}
export default Dialogs;