import React, { useDebugValue } from 'react';
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




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Sidebar />
        <Route path='/Content' component={Content} />
        <Route path='/Messages' render={() =>
          <Messages DialConv={props.state.MesagePage.DialConv}
            DialTxt={props.state.MesagePage.DialTxt}
            Message_Add={props.Message_Add}
            Message_Update={props.Message_Update}
            Refresh={props.state.MesagePage.Refresh} />} />
        <Route path='/News' render={() =>
          <News MainNews={props.state.NewsPage.MainNews}
            NewsAdd={props.NewsAdd}
            Update_News={props.Update_News}
            NewMesTxt={props.state.NewsPage.NewMesTxt} />} />
        <Route path='/Music' component={Music} />
        <Route path='/Set' component={Set} />
      </div>
    </BrowserRouter>
  )
}
export default App;
