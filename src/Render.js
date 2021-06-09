import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Message_Add, Message_Update, NewsAdd, Update_News } from './redux/Store'

export let RenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} NewsAdd={NewsAdd} Update_News={Update_News}
        Message_Add={Message_Add} Message_Update={Message_Update} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}



