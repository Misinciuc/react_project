import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Nav from './components/Navigation/Nav';
import News from './components/News/News';
import Set from './components/Set/set';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Nav/>
        <Sidebar/>
        <Route path='/Content' component={Content}/>
        <Route path='/Messages'component={Messages}/>
        <Route path='/News' component={News}/>
        <Route path='/Music' component={Music}/>
        <Route path='/Set' component={Set}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
  