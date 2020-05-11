import { updateMessageTextActiveCreator, sandMassageActiveCreator, saveActiveDialogActiveCreator } from '../../redux/Reducers/Dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
   
    return {
        common: state.common,
        DialogePage: state.DialogePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageTextActiveCreator: (text) => dispatch(updateMessageTextActiveCreator(text)),
        sandMassageActiveCreator: (message) => dispatch(sandMassageActiveCreator(message)),
        saveActiveDialogActiveCreator: (activeID) => dispatch(saveActiveDialogActiveCreator(activeID))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

