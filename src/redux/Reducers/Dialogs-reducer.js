let common
export const sub1=(obs)=>{
    common=obs.getState().common
}

let initialState = {
    NewMessageText: "",
    arrMessage: [
        { id: 0, sender: 0, recipient: 1, message: "How" },
        { id: 1, sender: 1, recipient: 0, message: "are" },
        { id: 2, sender: 0, recipient: 2, message: "You" },
        { id: 3, sender: 1, recipient: 2, message: "?" },
    ]
}
const DialogsReducer = (state = initialState, active) => {
    switch (active.type) {
        case "UPDATE-MESSAGE-TEXT":
            state.NewMessageText = active.value;
            break;
        case "SAVE-ACTIVE-DIALOG":
            common.activeDialog = active.value;
            break;
        case "SAND-MASSAGE":
            if (state.NewMessageText !== "" & common.activeDialog !== -1) {
                let NewMessage = {
                    id: state.arrMessage.length,
                    sender: common.activeIDUser,
                    recipient: common.activeDialog,
                    message: state.NewMessageText
                }
                state.arrMessage.push(NewMessage);
                state.NewMessageText = ""
            }
            break;
        default: return state;
    }
    return state
}


export const updateMessagePostActiveCreator = (text) => ({
    type: "UPDATE-MESSAGE-TEXT",
    value: text
})
export const sandMassageActiveCreator = (message) => ({
    type: "SAND-MASSAGE",
    value: message
})
export const saveActiveDialogActiveCreator = (value) => ({
    type: "SAVE-ACTIVE-DIALOG",
    value: value
})

export default DialogsReducer