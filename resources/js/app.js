import React from "react";
import ReactDOM from "react-dom";



/*
|--------------------------------------------------------------------------
| Import Components Home
|--------------------------------------------------------------------------
*/

import Header  from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";
import Home from "./components/componentsHome/Home";
import Slider from "./components/componentsHome/Slider";
import ModalTurn from "./components/componentsTurn/ModalTurn"

/*
|--------------------------------------------------------------------------
| Import Components Access
|--------------------------------------------------------------------------
*/

import Login from "./components/componentsLogin/Login";

/*
|--------------------------------------------------------------------------
| Import Components BackOffice
|--------------------------------------------------------------------------
*/

import SidebarHeader from "./components/componentsBackOffice/componentsHeader/SidebarHeader";
import Turns from "./components/componentsBackOffice/componentsTurns/Turns";
import ShoppingCart from "./components/componentsShoppingCart/shoppingCart";
import Shop from "./components/componentsShop/Shop";
import Item from "./components/componentsShop/Item";


require('./bootstrap');

async function Render(){

  if (document.getElementById("login")) {
    ReactDOM.render(
      <React.StrictMode>
          <Login/>
      </React.StrictMode>,
      document.getElementById("login")
  );
  }

  if (document.getElementById("header")) {
    ReactDOM.render(
      <React.StrictMode>
        <Header/>
      </React.StrictMode>,
      document.getElementById("header")
    );
  }

  if (document.getElementById("footer")) {
    ReactDOM.render(
      <React.StrictMode>
        <Footer/>
      </React.StrictMode>,
      document.getElementById("footer")
    );
  }

  if (document.getElementById("home")) {
    ReactDOM.render(
      <React.StrictMode>
        <Home/>
      </React.StrictMode>,
      document.getElementById("home")
    );
  }

  if (document.getElementById("slider")) {
    ReactDOM.render(
      <React.StrictMode>
        <Slider />
      </React.StrictMode>,
      document.getElementById("slider")
    );
  }

  

  if( document.getElementById("sidebar-header")){
    ReactDOM.render(
      <React.StrictMode>
        <SidebarHeader/>
      </React.StrictMode>,
      document.getElementById("sidebar-header")
    );
  }

  if (document.getElementById("modalTurn")) {
    ReactDOM.render(
        <React.StrictMode>
            <ModalTurn />
        </React.StrictMode>,
        document.getElementById("modalTurn")
    );
  }

  if( document.getElementById("turns")){
    ReactDOM.render(
      <React.StrictMode>
        <Turns/>
      </React.StrictMode>,
      document.getElementById("turns")
    );
  }

  

}

Render();
