
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Axios from 'axios';
import { setDateUser } from './../../redux/Reducers/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(response => {
         
            if (response.data.resultCode === 0) {
                let data={activeIDUser:response.data.data.id,email:response.data.data.email,login:response.data.data.login}
                this.props.setDateUser(data)
            }
        })
    }
    render() { return <Header 
        activeIDUser={this.props.auth.activeIDUser}
    /> }

}

let mapStateToProps = (state) => {

    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps, {
    setDateUser

})(HeaderContainer)