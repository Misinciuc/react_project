import React from 'react';
import './App.css';
import Content from './components/Content';
import Header_logo from './components/Headerlogo';
import Header_text from './components/Headertext';
import Nav from './components/Nav';
import Side_right from './components/Sidebar';
import User_info from './components/Userinfo';

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
