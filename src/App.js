import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { Route, Redirect, } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import SideBarContainer from './components/SideBar/SideBarContainer.js';
import UsersContainer from './components/Users/Users.Container.js';
import HeaderContainer from './components/Header/Header.Container';
import Login from './components/Login/Login';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {




  return (

    <div className="App">
      <Redirect to=""/>
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

  );
}

export default App;
