import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import { TextBox, StyllButton } from '../inputs/inputs';


const Dialogs = (props) => {
    let newPostElement = React.createRef()
    let SendMessage = () => {
      props.SendMessages(newPostElement.current.value);
      newPostElement.current.value=""
    }
    return <div className={s.wrapper}>
        <DialogList className={s.NamesList} state={props.state} SaveActiveDialog={props.SaveActiveDialog}/>
        <MessageList className={s.MessageList} state={props.state} />
        <div className={s.Sender}>
            <TextBox value="Text message" refs={newPostElement} />
            <div className={s.SendButtom}>
                <StyllButton value="Sand massage" onClick={SendMessage} />
            </div>

        </div>
    </div>
}
export default Dialogs;