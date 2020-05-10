
import React from 'react';
import { connect } from 'react-redux';
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
export default connect(mapStateToProps, {
    

})(HeaderContainer)