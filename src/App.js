import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Nav from './components/Navigation/Nav';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Content />
      <Sidebar/>
      {/* <Messages/> */}
    </div>
  );
}
export default App;
  