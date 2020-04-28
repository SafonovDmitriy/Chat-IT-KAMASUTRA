import { updateMessageTextActiveCreator, sandMassageActiveCreator, saveActiveDialogActiveCreator } from '../../redux/Reducers/Dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   
    return {
        common: state.common,
        DialogePage: state.DialogePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageTextActiveCreator: (text) => dispatch(updateMessageTextActiveCreator(text)),
        sandMassageActiveCreator: (message) => dispatch(sandMassageActiveCreator(message)),
        saveActiveDialogActiveCreator: (activeID) => dispatch(saveActiveDialogActiveCreator(activeID))
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;