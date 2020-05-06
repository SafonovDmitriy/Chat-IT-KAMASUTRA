import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, updateTotalCount, updatePage, updatePreloader } from '../../redux/Reducers/Users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import { UsersAPI, subscribeAPI } from './../../api/api';
import { updateFollowing } from './../../redux/Reducers/Users-reducer';

class UsersContainer extends React.Component {

    getNewUsers = (p) => {
        this.props.updatePage(p)
        this.props.updatePreloader(true);
        UsersAPI.getUsers(p, this.props.urlPage.pageSize).then(response => {

            this.props.updatePreloader(false);
            this.props.updateTotalCount(response.totalCount)
            this.props.setUsers(response.items)
        })
    }
    componentDidMount() {
        this.props.updatePreloader(true);
        UsersAPI.getUsers(this.props.urlPage.page, this.props.urlPage.pageSize).then(response => {
            this.props.updatePreloader(false);
            this.props.updateTotalCount(response.totalCount)
            this.props.setUsers(response.items)

        })
    }

    follow = (idUser) => {
        this.props.updateFollowing(true, idUser)
        subscribeAPI.postFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                this.props.follow(idUser)
            }
            this.props.updateFollowing(false, idUser)
        })
    }
    unfollow = (idUser) => {
        this.props.updateFollowing(true, idUser)
        subscribeAPI.deleteFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                this.props.unfollow(idUser)
            }
            this.props.updateFollowing(false, idUser)
        })
    }
    render() {
        return <>
            {this.props.preloaded ? <Preloader /> : <Users
                urlPage={this.props.urlPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                updatePage={(int) => this.getNewUsers(int)}
                follow={(idUser) => this.follow(idUser)}
                unfollow={(idUser) => this.unfollow(idUser)}

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
        followingInProgress: s.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        updateTotalCount, updatePage, updatePreloader,
        updateFollowing
    }
)(UsersContainer)