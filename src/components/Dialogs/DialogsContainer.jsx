import React from 'react';
import { updateMessageTextActiveCreator, sandMassageActiveCreator, saveActiveDialogActiveCreator } from '../../redux/Reducers/Dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    let updateMessagePostActive = (text) => {
        props.dispatch(updateMessageTextActiveCreator(text))
    }
    let sandMassageActive = (message) => {
        props.dispatch(sandMassageActiveCreator(message))
    }
    let saveActiveDialogActive = (activeID) => {
        props.dispatch(saveActiveDialogActiveCreator(activeID))
    }
    return <Dialogs
        common={props.common}
        DialogePage={props.DialogePage}
        updateMessageTextActiveCreator={updateMessagePostActive}
        sandMassageActiveCreator={sandMassageActive}
        saveActiveDialogActiveCreator={saveActiveDialogActive}
        />
}
export default DialogsContainer;