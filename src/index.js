import {state} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Add_News, Update_News, Add_Message, Update_Messages, Subscribe} from './redux/state'

let RenderTree = () =>{

ReactDOM.render(
  <React.StrictMode>
    <App Apstate={state} Add_News={Add_News} 
    Update_News={Update_News} Add_Message={Add_Message}
     Update_Messages={Update_Messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
RenderTree(state);

Subscribe(RenderTree);