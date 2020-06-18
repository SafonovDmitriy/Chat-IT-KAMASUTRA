import { connect } from 'react-redux';
import { compose } from 'redux';
import { sandMassageActiveCreator, saveActiveDialogActiveCreator } from '../../redux/Reducers/Dialogs-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {

    return {
        common: state.common,
        DialogePage: state.DialogePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sandMassageActiveCreator: (message) => dispatch(sandMassageActiveCreator(message)),
        saveActiveDialogActiveCreator: (activeID) => dispatch(saveActiveDialogActiveCreator(activeID))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

