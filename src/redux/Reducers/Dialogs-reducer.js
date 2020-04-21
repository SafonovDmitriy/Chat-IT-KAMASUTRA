
let common
export const sub1 = (obs) => {
    common = obs
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

    let copyState = { ...state }
    copyState.arrMessage = [...state.arrMessage]

    switch (active.type) {
        case "UPDATE-MESSAGE-TEXT":
            copyState.NewMessageText = active.value;

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

                copyState.arrMessage.push(NewMessage);
                copyState.NewMessageText = ""
            }
            break;
        default: return copyState;
    }

    return copyState;
}


export const updateMessageTextActiveCreator = (text) => ({
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