import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import { TextBox, StyllButton } from '../inputs/inputs';
import { updateMessagePostActiveCreator,sandMassageActiveCreator } from './../../redux/Reducers/Dialogs-reducer';



const Dialogs = (props) => {
    let newElement = React.createRef()
    let SendMessage = () => {
        props.dispatch(sandMassageActiveCreator(newElement.current.value));
        newElement.current.value = ""
    }
    return <div className={s.wrapper}>
        <DialogList className={s.NamesList}
            state={props.state}
            dispatch={props.dispatch}
        />

        <MessageList className={s.MessageList}
            state={props.state}
        />

        <div className={s.Sender}>
            <TextBox
                value={props.state.DialogePage.NewMessageText}
                placeholder="Send Message"
                refs={newElement}
                onChange={() => props.dispatch(updateMessagePostActiveCreator(newElement.current.value))}
            />
            <div className={s.SendButtom}>
                <StyllButton value="Sand massage" onClick={SendMessage} />
            </div>

        </div>
    </div>
}
export default Dialogs;