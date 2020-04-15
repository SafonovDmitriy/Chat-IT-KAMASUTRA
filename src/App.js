import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
library.add(fab, faCheckSquare, faCoffee)


function App(props) {




  return (
    <BrowserRouter>
      <div className="App">

        <div className="appHeader"><Header /></div>

        <div className="appSideBar">  <SideBar activeDialog={props.state.common.activeDialog} /></div>
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
    </BrowserRouter>
  );
}

export default App;
