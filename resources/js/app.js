import React from "react";
import ReactDOM from "react-dom";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import Header from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";

import Shop from "./components/componentsHome/Shop";
import Item from "./components/componentsHome/Item";
import Home from "./components/componentsHome/Home";
import Counter from "./counter";

// import ImportBoostrap from "./importBoostrap"

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


ReactDOM.render(
  <React.StrictMode>
    <Shop/>
  </React.StrictMode>,
  document.getElementById("shop")
);





// ReactDOM.render(
//   <React.StrictMode>
//     <ImportBoostrap/>
//   </React.StrictMode>,
//   document.getElementById("import-boostrap")
// );

