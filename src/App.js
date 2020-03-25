import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';



function App() {
  return (

    <div className="App">
      <div className="appHeader"><Header /></div>
      <div className="appSideBar">  <SideBar /></div>
      <div className="appContent"><Content /></div>
    </div>
  );
}

export default App;
