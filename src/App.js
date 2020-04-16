import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header/Header.jsx';
import { Route, } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer.jsx';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {




  return (

    <div className="App">

      <div className="appHeader"><Header /></div>

      <div className="appSideBar">  <SideBarContainer
        activeDialog={props.state.common.activeDialog}
        sideBar={props.state.sideBar}
        dispatch={props.dispatch} /></div>
      <div className="appContent">
        <Route path="/profile" render={() => <ContentContainer
          ProfileDate={props.state.common.ProfileDate}
          arrPost={props.state.ProfilePage.arrPost}
          dispatch={props.dispatch}
        />} />
        <Route path="/messages" render={() => <DialogsContainer
          common={props.state.common}
          DialogePage={props.state.DialogePage}
          dispatch={props.dispatch}
        />} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/setting" />

      </div>
    </div>

  );
}

export default App;
