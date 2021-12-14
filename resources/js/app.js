import React from "react";
import ReactDOM from "react-dom";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import Header  from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";


import Shop from "./components/componentsShop/Shop";
import Counter from "./counter";
import Item from "./components/componentsShop/Item";
import ShoppingCart from "./components/componentsShoppingCart/ShoppingCart";
import ModalTurn from "./components/componentsTurn/ModalTurn";

// import { useReducer } from "react";
// import { shoppingInitialState, shoppingReducer } from "../../src/reducers/shoppingReducer";

import Home from "./components/componentsHome/Home";
import Slider from "./components/componentsHome/Slider";

// BACKOFFICE IMPORTS

import SidebarHeader from "./components/componentsBackOffice/componentsHeader/SidebarHeader"
import Turns from "./components/componentsBackOffice/componentsTurns/Turns"
import Sales from "./components/componentsBackOffice/componentsInventory/Inventory"
import Inventory from "./components/componentsBackOffice/componentsOrderSale/Sales"
import Users from "./components/componentsBackOffice/componentsUser/Users"
import Settings from "./components/componentsBackOffice/componentsSetting/Settings";



require('./bootstrap');

function initShop(){
  if (document.getElementById("item")) {
    ReactDOM.render(
        <React.StrictMode>
            <Item/>
        </React.StrictMode>,
        document.getElementById("item")
    );
  }
}
initShop();


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
    <Home/>
  </React.StrictMode>,
  document.getElementById("home")
);


ReactDOM.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>,
  document.getElementById("slider")
);







// ReactDOM.render(
//   <React.StrictMode>
//     <ImportBoostrap/>
//   </React.StrictMode>,
//   document.getElementById("import-boostrap")
// );

