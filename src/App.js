import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header_logo from './components/Header/Headerlogo';
import Header_text from './components/Header/Headertext';
import Nav from './components/Nav/Nav';
import Side_right from './components/Sidebar/Sidebar';
import User_info from './components/User/Userinfo';

const App = () => {
  return (
    <div className="container">
      <Header_logo />
      <Header_text />
      <Nav />
      <Content />
      <Side_right/>
      <User_info/>
    </div>
  );
}
export default App;
  