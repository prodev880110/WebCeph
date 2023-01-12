import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reduce/store";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorker.unregister();