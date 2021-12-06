import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/componentsHome/Home";
import Item from "./components/componentsHome/Item";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import Header from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";
import Dropdown from "./components/componentsBody/Dropdown";

require('./bootstrap');




 ReactDOM.render(
  <React.StrictMode>
      <Home/>
  </React.StrictMode>,
  document.getElementById("home")
);


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

ReactDOM.render(
  <React.StrictMode>
    <Dropdown/>
  </React.StrictMode>,
  document.getElementById("drop-down")
);

