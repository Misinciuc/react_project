import React from 'react'; 
import s from './Messages.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
           <div className={s.dialog}>
               {UserDialog}
           </div>
    )
}

const Conversation = () => {
    return (
        <div className={s.conversation}>
            {DialMess}
        </div>
    )
}


const ConvItem = (props) => {
    return(
        <div className={s.conv}>
             <p>{props.message}</p>
        </div>
    )
}

const DialogItem = (props) => {
    let path = "/Messages/" + props.id;
    return(
        <div>
            <ul>
                <li className={s.dialog_item}>
                     <NavLink to={path}>{props.name}</NavLink>
                </li>
             </ul>
        </div>
    )
}

let DialConv = [
    { id: 1, name: 'Iurcik'},
    { id: 2, name: 'John'},
    { id: 3, name: 'Peter'},
    { id: 4, name: 'David'}
]


let DialTxt = [
    { id: 1, message: 'Hello people'},
    { id: 2, message: 'Just do it'},
    { id: 3, message: 'YO YO'},
    { id: 4, message: 'fifa'}
]

let UserDialog = DialConv
.map( dialog => <DialogItem name={dialog.name}
                             id={dialog.id}/>);

let DialMess = DialTxt
.map( mess =>  <ConvItem message={mess.message} id={mess.id}/>);

export {Dialogs, Conversation};