import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ContentContainer from './components/Content/ContentContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import SideBarContainer from './components/SideBar/SideBarContainer.js';
import UsersContainer from './components/Users/Users.Container.js';
import HeaderContainer from './components/Header/Header.Container';
import Login from './components/Login/Login';

import { login } from './redux/Reducers/auth-reducer';
import { getUserDate } from './redux/Reducers/Profile-reducer';

import Preloader from './components/common/Preloader/Preloader';






class App extends React.Component {

  componentDidMount = () => {
    this.props.login()
  }

  render() {
   
    
    return this.props.preloader ? <Preloader /> : <>


      <div className="App">

        <div className="appHeader"><HeaderContainer /></div>

        <div className="appSideBar">  <SideBarContainer
        /></div>
        <div className="appContent">
          <Route path='/profile/:userId?/' render={() => <ContentContainer

          />} />
          <Route path="/messages/" render={() => <DialogsContainer

          />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/login" render={() => <Login />} />
          <Route path="/FindUser" render={() => <UsersContainer />} />

          <Route path="/setting" />

        </div>
      </div>
    </>

  }


  ;
}


let mapStateToProps = (state) => {

  return {
    userId:state.ProfilePage.selectUser.userId,
    preloader: state.auth.preloader

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    getUserDate: (idUser) => dispatch(getUserDate(idUser))
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
