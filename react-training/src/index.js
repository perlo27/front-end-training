import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import createStoreWithConfig from "./store/configureStore";
import { Provider } from "react-redux";
import style from "./main.css";
import store from "./store/configureStore"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
