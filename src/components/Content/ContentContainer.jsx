import Content from './Content';
import { updatePostTextActionCreator, addPostActionCreator, likeForPostActiveCreator } from '../../redux/Reducers/Profile-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        ProfileDate: state.common.ProfileDate,
        arrPost: state.ProfilePage.arrPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addPostActionCreator()),
        updatePostTextActionCreator: (text) => dispatch(updatePostTextActionCreator(text)),
        likeForPostActiveCreator: (id) => dispatch(likeForPostActiveCreator(id))
    }
}
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)
export default ContentContainer;