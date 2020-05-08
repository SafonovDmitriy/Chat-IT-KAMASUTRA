
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { login } from './../../redux/Reducers/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.login()
    }
    render() {
        return <Header
            {...this.props}
        />
    }

}

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
}
export default connect(mapStateToProps, {
    login

})(HeaderContainer)