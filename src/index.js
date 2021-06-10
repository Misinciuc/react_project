import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import store from './redux/Store'
import { BrowserRouter } from "react-router-dom";

let RenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                dispath={store.dispath.bind(store)} />
        </BrowserRouter>,
        document.getElementById("root")
    );
}
RenderTree(store.getState());

store.subscribe(RenderTree);


