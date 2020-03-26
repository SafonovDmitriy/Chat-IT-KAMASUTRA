import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appHeader"><Header /></div>
        <div className="appSideBar">  <SideBar /></div>
        <div className="appContent">
          <Route path="/profile" component={Content} />
          <Route path="/messages" component={Dialogs} />
          <Route path="/news"  />
          <Route path="/music"  />
          <Route path="/setting"  />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
