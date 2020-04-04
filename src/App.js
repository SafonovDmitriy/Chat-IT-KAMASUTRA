import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {
  let state = props.state

  return (
    <BrowserRouter>
      <div className="App">

        <div className="appHeader"><Header /></div>
        <div className="appSideBar">  <SideBar activeDialog={state.activeDialog} /></div>
        <div className="appContent">
          <Route path="/profile" render={() => <Content
            updatePostText={props.updatePostText}
            ProfilePage={state.ProfilePage}
            activeIDUser={state.activeIDUser}
            addPost={props.addPost}
            LikeforPost={props.LikeforPost}
            NewPostText={state.ProfilePage.NewPostText}
          />} />
          <Route path="/messages" render={() => <Dialogs
            state={state}
            SendMessages={props.SendMessages}
            SaveActiveDialog={props.SaveActiveDialog}
            updateMessageText={props.updateMessageText}
          />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/setting" />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
