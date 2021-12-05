import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";

require('./bootstrap');


ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.getElementById("header")
);

ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("footer")
);