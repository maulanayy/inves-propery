import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "antd/dist/antd.css";
import "./styles/custom.css";
import configureStore from './store/configureStore';
import { Provider } from "react-redux"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
