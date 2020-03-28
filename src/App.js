import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



function App(props) {
  let state = props.state
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appHeader"><Header /></div>
        <div className="appSideBar">  <SideBar /></div>
        <div className="appContent">
          <Route path="/profile" render={() => <Content ProfilePage={state.ProfilePage} />} />
          <Route path="/messages" render={() => <Dialogs DialogePage={state.DialogePage} />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/setting" />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
