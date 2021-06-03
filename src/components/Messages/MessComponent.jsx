import React, { useDebugValue } from 'react'; 
import style from './Messages.module.css'
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    let UserDialog = props.DialConv
  .map( elem =>  <DialogItem name={elem.name} id={elem.id}/>);
    return (
           <div className={style.dialog}>
               {UserDialog}
           </div>
    )
}

const Conversation = (props) => {
      let DialMess = props.DialTxt
      .map( mess =>  <ConvItem message={mess.message} id={mess.id}/>);
    return (
        <div className={style.conversation}>
            {DialMess}
        </div>
    )
}

const ConvItem = (props) => {
    return(
        <div className={style.conv}>
             <p>{props.message}</p>
        </div>
    )
}

const DialogItem = (props) => {
    let path = "/Messages/" + props.id;
    return(
        <div>
            <ul>
                <li className={style.dialog_item}>
                     <NavLink to={path}>{props.name}</NavLink>
                </li>
             </ul>
        </div>
    )
}

const BtnMes = (props) =>{
    let newmess = React.createRef();
    let Addpost = () => {
    let text = newmess.current.value;
    props.Add_Message(text);
    };
    let MessUp = () =>{
        props.Update_Messages();
    }
    return(
        <div className={style.area}>
            <button onClick={Addpost}>ADD</button>
            <textarea ref={newmess} onChange={MessUp} value={props.Refresh}></textarea>
        </div>
    )
}


export {Dialogs, Conversation, BtnMes};


  