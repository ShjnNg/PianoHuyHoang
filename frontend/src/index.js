import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/store";
import MessengerCustomerChat from 'react-messenger-customer-chat';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {/* <MessengerCustomerChat
        pageId="160109767965339"
        appId="2950620231932501"
    />, */}
    </React.StrictMode>
  </Provider>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
