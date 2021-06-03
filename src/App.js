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
import { News_Text } from './redux/state';



const App = (props) => {
    return(
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Nav/>
        <Sidebar/>
        <Route path='/Content' component={Content}/>
        <Route path='/Messages'render={ () => 
        <Messages DialConv={props.Apstate.MesagePage.DialConv} 
                  DialTxt={props.Apstate.MesagePage.DialTxt}
                  Add_Message={props.Add_Message}
                  Update_Messages={props.Update_Messages}
                  Refresh={props.Apstate.MesagePage.Refresh}/> }/>
        <Route path='/News' render={ () => 
        <News MainNews={props.Apstate.NewsPage.MainNews}
        Add_News={props.Add_News}
        Update_News={props.Update_News}
        NewMesTxt={props.Apstate.NewsPage.NewMesTxt}/>}/>
        <Route path='/Music' component={Music}/>
        <Route path='/Set' component={Set}/>
      </div>
    </BrowserRouter>
    )
}
export default App;
  