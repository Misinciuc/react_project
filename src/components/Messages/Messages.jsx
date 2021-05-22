import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import style from './Messages.module.css'
import { Conversation, Dialogs } from './MessComponent';

const Messages = (props) => {
    return (
        <BrowserRouter>
        <div className={style.messWrap}>
            <Route path='/Messages' render={ () => <Dialogs DialConv={props.DialConv}/> }/>
            <Conversation DialTxt={props.DialTxt}/>
        </div>
        </BrowserRouter>
    )
} 
  

export default Messages;