import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./redux/reducers/authReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  reduxAuth: authReducer
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
