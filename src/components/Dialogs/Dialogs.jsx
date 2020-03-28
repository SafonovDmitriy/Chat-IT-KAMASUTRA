import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';


const Dialogs = (props) => {
    return <div className={s.wrapper}>
       <DialogList className={s.NamesList}/>
       <MessageList className={s.MessageList}/>
    </div>
}
export default Dialogs;