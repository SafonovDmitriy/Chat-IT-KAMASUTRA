import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';



function App() {
  return (
 
      <div className="App">
        <Header className="Header" />
        <SideBar className="SideBar" />
        <Content className="Content" />
      </div>
  );
}

export default App;
