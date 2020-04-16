import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import { TextBox, StyllButton } from '../inputs/inputs';




const Dialogs = (props) => {
    let newElement = React.createRef()
    let SendMessage = () => {
        props.sandMassageActiveCreator(newElement.current.value);
        newElement.current.value = ""
    }
   
    return <div className={s.wrapper}>
        <DialogList className={s.NamesList}
            common={props.common}
            saveActiveDialogActiveCreator={props.saveActiveDialogActiveCreator}
        />

        <MessageList className={s.MessageList}
            activeDialog={props.common.activeDialog}
            activeIDUser={props.common.activeIDUser}
            arrMessage={props.DialogePage.arrMessage}
        />

        <div className={s.Sender}>
            <TextBox
                value={props.DialogePage.NewMessageText}
                placeholder="Send Message"
                refs={newElement}
                onChange={() => props.updateMessageTextActiveCreator(newElement.current.value)}
            />
            <div className={s.SendButtom}>
                <StyllButton value="Sand massage" onClick={SendMessage} />
            </div>

        </div>
    </div>
}
export default Dialogs;