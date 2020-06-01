import React from 'react';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import MessageList from './MessageList/MessageList';
import { TextBox, StyllButton } from '../inputs/inputs';
import { reduxForm } from 'redux-form';




const Dialogs = (props) => {
    const onSubmit = (value) => {
        
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
        <AddNewMessageRedux className={s.Sender} onSubmit={onSubmit} />
    </div >

}


const AddNewMessage = (props) => {

    return <div className={s.Sender}>
        <form onSubmit={props.handleSubmit}>
            <div><TextBox placeholder="Send Message" name={"newMessage"} component={"input"} /></div>
            <div className={s.SendButtom}><StyllButton  value="Send"/></div>
        </form>
    </div>

}

const AddNewMessageRedux = reduxForm({
    form: 'newMessageForm'
})(AddNewMessage)

export default Dialogs;