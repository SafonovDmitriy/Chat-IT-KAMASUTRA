
import React from 'react';
import { connect } from 'react-redux';
import App from './App.js';
import { login } from './redux/Reducers/auth-reducer';
import { updateProfileURL } from './redux/Reducers/SideBar-reducer.js';
import Preloader from './components/common/Preloader/Preloader';



class AppContainer extends React.Component {
  componentDidMount = () => {
    this.props.login()
  }
  render() {
    return this.props.preloader ? <Preloader /> : <>
    
    
     
    {/* {this.props.isAuth===false ? (<Redirect to="/login/" />) : ''} */}
      <App activeIDUser={this.props.activeIDUser}
        isAuth={this.props.isAuth}
      />
      
    </>

  }


}

let mapStateToProps = (state) => {

  return {
    isAuth: state.auth.isAuth,
    activeIDUser: state.auth.activeIDUser,
    preloader: state.auth.preloader
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    updateProfileURL: (idUser) => dispatch(updateProfileURL(idUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
