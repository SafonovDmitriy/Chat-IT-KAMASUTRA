
import React from 'react';
import { connect } from 'react-redux';
import { logOut } from './../../redux/Reducers/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        

        return <>
          
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
let mapDispatchToProps = (dispatch) => {

    return {
     logOut:()=>dispatch(logOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)