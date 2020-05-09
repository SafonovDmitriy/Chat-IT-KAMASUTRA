
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { login } from './../../redux/Reducers/auth-reducer';
import { Redirect } from 'react-router-dom';
import { updateProfileURL } from '../../redux/Reducers/SideBar-reducer';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.login()
      
    }
    render() {
        updateProfileURL(this.props.idActiveUser)

        return <>
            <Redirect to={!this.props.isAuth ? "/login/" : "/profile/" + this.props.idActiveUser}></Redirect>
            <Header
                {...this.props}
            />
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        idActiveUser: state.auth.activeIDUser,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
}
export default connect(mapStateToProps, {
    login

})(HeaderContainer)