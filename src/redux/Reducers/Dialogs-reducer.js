
const DialogsReducer = (state, active, common) => {
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