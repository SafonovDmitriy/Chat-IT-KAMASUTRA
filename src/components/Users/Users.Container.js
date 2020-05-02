import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, updateTotalCount, updatePage, updatePreloader } from '../../redux/Reducers/Users-reducer';
import Axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';


class UsersContainer extends React.Component {

    getNewUsers = (p) => {
        this.props.updatePage(p)
        this.props.updatePreloader(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.urlPage.pageSize}`).then(response => {
            this.props.updatePreloader(false);
            this.props.updateTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    componentDidMount() {
        this.props.updatePreloader(true);

        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.urlPage.page}&count=${this.props.urlPage.pageSize}`).then(response => {
            this.props.updatePreloader(false);
            this.props.updateTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return <>
            {this.props.preloaded ? <Preloader /> : <Users
                urlPage={this.props.urlPage}
                users={this.props.users}
                updatePage={(int) => this.getNewUsers(int)}
                follow={(idUser) => this.props.follow(idUser)}
                unfollow={(idUser) => this.props.unfollow(idUser)}
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