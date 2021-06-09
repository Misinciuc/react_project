import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import store from './redux/Store'

let RenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                NewsAdd={store.NewsAdd.bind(store)}
                Update_News={store.Update_News.bind(store)}
                Message_Add={store.Message_Add.bind(store)}
                Message_Update={store.Message_Update.bind(store)} />
        </React.StrictMode>,
        document.getElementById("root")
    );
}
RenderTree(store.getState());

store.subscribe(RenderTree);


