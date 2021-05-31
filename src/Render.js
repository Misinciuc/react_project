import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddNews} from './redux/state'

export let RenderTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App Apstate={state} AddNews={AddNews}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
