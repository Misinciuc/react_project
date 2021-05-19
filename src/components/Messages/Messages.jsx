import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import s from './Messages.module.css'
import { Conversation, Dialogs } from './MessComponent';
const Messages = () => {
    return (
        <BrowserRouter>
        <div className={s.messWrap}>
            <Route path='/Messages' component={Dialogs}/>
            <Conversation/>
        </div>
        </BrowserRouter>
    )
}

export default Messages;