import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import style from './Messages.module.css'
import { BtnMes, Conversation, Dialogs } from './MessComponent';

const Messages = (props) => {
    return (
        <BrowserRouter>
        <div className={style.messWrap}>
            <Route path='/Messages' render={ () => <Dialogs DialConv={props.DialConv}/> }/>
            <Conversation DialTxt={props.DialTxt}/>
            <BtnMes Add_Message={props.Add_Message}
             Update_Messages={props.Update_Messages}
             Refresh={props.Refresh}/>
        </div>
        </BrowserRouter>
    )
} 
  

export default Messages;