import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import createStoreWithInitialState from "./store/configureStore";
import { Provider } from "react-redux";
import style from "./main.css";

const store = createStoreWithInitialState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
