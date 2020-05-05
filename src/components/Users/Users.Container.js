import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, updateTotalCount, updatePage, updatePreloader } from '../../redux/Reducers/Users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import { UsersAPI, subscribeAPI } from './../../api/api';

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
        subscribeAPI.postFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                this.props.follow(idUser)
            }
        })
    }
    unfollow = (idUser) => {

        subscribeAPI.deleteFollow(idUser).then(response => {
            if (response.resultCode === 0) {
                this.props.unfollow(idUser)
            }
        })
    }
    render() {
        return <>
            {this.props.preloaded ? <Preloader /> : <Users
                urlPage={this.props.urlPage}
                users={this.props.users}
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
        preloaded: s.preloaded
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        updateTotalCount, updatePage, updatePreloader
    }
)(UsersContainer)