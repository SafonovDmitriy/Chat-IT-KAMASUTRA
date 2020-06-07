
import React from 'react';
import { connect } from 'react-redux';
import App from './App.js';
import { login } from './redux/Reducers/auth-reducer';
import Preloader from './components/common/Preloader/Preloader';



class AppContainer extends React.Component {
  componentDidMount = () => {
    this.props.login()
  }
  render() {

    return  !this.props.firstResponse ? <Preloader /> :  <>



      {/* {this.props.isAuth===false ? (<Redirect to="/login/" />) : ''} */}
      <App/>

    </>

  }


}



export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
