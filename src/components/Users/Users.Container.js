import React from 'react';
import { connect } from 'react-redux';
import { followT, unfollowT, getUsers } from '../../redux/Reducers/Users-reducer';
import { getUserStatus } from '../../redux/Reducers/Profile-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.urlPage.countPage, this.props.urlPage.pageSize)
    }


    render() {
        return <>
            {this.props.preloaded ? <Preloader /> : <Users
                urlPage={this.props.urlPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                isAuth={this.props.isAuth}
                updatePage={(int) => this.props.getUsers(int, this.props.urlPage.pageSize)}
                follow={(idUser) => this.props.followT(idUser)}
                unfollow={(idUser) => this.props.unfollowT(idUser)}
                getUserStatus={(status)=>this.props.getUserStatus(status)}

            />}

        </>
    }
}

let mapStateToProps = (state) => {
    let s = state.usersPage
    return {
        users: s.users,
        urlPage: s.urlPage,
        preloaded: s.preloaded,
        followingInProgress: s.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
    {
        followT, unfollowT, getUsers, getUserStatus
    }
)(UsersContainer)