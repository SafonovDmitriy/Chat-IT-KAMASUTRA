
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setDateUser, setPictureUser } from './../../redux/Reducers/auth-reducer';
import dontAvatar from '../../assets/images/123.png'
import { loginAPI } from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        loginAPI.auth().then(response => {

            if (response.resultCode === 0) {
                let data = { activeIDUser: response.data.id, email: response.data.email, login: response.data.login }
                this.props.setDateUser(data)
                loginAPI.getUserDate(response.data.id).then(response2 => {
                    this.props.setPictureUser(response2.photos.small === null ? dontAvatar : response2.photos.small)
                })
            }
        })
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
    setDateUser, setPictureUser

})(HeaderContainer)