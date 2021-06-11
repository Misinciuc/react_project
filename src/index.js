import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import store from './redux/redux_store'
import { BrowserRouter } from "react-router-dom";

let RenderTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById("root")
    );
}
RenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    RenderTree(state);
});


