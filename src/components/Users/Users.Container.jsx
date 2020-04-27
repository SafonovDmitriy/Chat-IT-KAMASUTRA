import Users from './Users.jsx';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, updateTotalCountAC, updatePageAC } from './../../redux/Reducers/Users-reducer';




let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        urlPage: state.usersPage.urlPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => dispatch(setUsersAC(users)),
        updateTotalCount: (int) => dispatch(updateTotalCountAC(int)),
        updatePage:(int)=>dispatch(updatePageAC(int))


    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer