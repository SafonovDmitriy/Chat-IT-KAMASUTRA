import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, updateTotalCountAC, updatePageAC } from '../../redux/Reducers/Users-reducer';
import Axios from 'axios';
import Users from './Users';


class UsersContainer extends React.Component {

    getNewUsers = (p) => {
        this.props.updatePage(p)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.urlPage.pageSize}`).then(response => {
            this.props.updateTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.urlPage.page}&count=${this.props.urlPage.pageSize}`).then(response => {
            this.props.updateTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            urlPage={this.props.urlPage}
            users={this.props.users}
            updatePage={(int) => this.getNewUsers(int)}
            follow={(idUser) => this.props.follow(idUser)}
            unfollow={(idUser) => this.props.unfollow(idUser)}
        />
    }
}

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
        updatePage: (int) => dispatch(updatePageAC(int))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)