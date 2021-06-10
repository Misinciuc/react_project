import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './Messages.module.css'
import { BtnMes, Conversation, Dialogs } from './MessComponent';

const Messages = (props) => {
    return (
        <div className={style.messWrap}>
            <Route path='/Messages' render={() => <Dialogs DialConv={props.DialConv} />} />
            <Conversation DialTxt={props.DialTxt} />
            <BtnMes
                dispath={props.dispath}
                Refresh={props.Refresh} />
        </div>
    )
}


export default Messages;