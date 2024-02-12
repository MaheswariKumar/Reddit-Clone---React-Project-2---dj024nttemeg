import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./components/Store.js";
import App from "./components/App";
import AuthApp from "./components/AuthApp.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const authroot = ReactDOM.createRoot(document.getElementById("Auth_root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Provider store={store}>
          <App />
          <AuthApp />
        </Provider>
    </React.StrictMode>
  </BrowserRouter>
);


// authroot.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <Provider store={store}>
//         <AuthApp />
//       </Provider>
//     </React.StrictMode>
//   </BrowserRouter>
// );
