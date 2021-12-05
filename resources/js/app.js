import React from "react";
import ReactDOM from "react-dom";
import Hola from "./components/componentsHome/Hola";

require('./bootstrap');


ReactDOM.render(
  <React.StrictMode>
    <Hola/>
  </React.StrictMode>,
  document.getElementById("hola")
);