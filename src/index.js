import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import store from './redux/Store'

let RenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                dispath={store.dispath.bind(store)} />
        </React.StrictMode>,
        document.getElementById("root")
    );
}
RenderTree(store.getState());

store.subscribe(RenderTree);


