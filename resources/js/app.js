import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {VerifyAuth } from "./helpers/AuthHelpers";
//import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Prueba from "./components/prueba";
import Login from "./components/componentsLogin/Login";
import SidebarHeader from "./components/componentsBackOffice/componentsHeader/SidebarHeader";
import Turns from "./components/componentsBackOffice/componentsTurns/Turns";
import Header  from "./components/componentsBody/Header";
import Footer from "./components/componentsBody/Footer";
import Home from "./components/componentsHome/Home";
import Slider from "./components/componentsHome/Slider";

require('./bootstrap');


export const authenticate  = async () => {
  let keyAuth = await VerifyAuth();

  console.log(keyAuth);

  return keyAuth
}



export default (authenticate)


async function Render() {

  const authorize = await authenticate()

  /***************************** 
  
          USER AUTHENTICATED

  ******************************/

  switch (authorize.request.status) {
    case 200:

      if (document.getElementById("login")) {
        ReactDOM.render(
          <React.StrictMode>
              <Login auth={authorize}/>
          </React.StrictMode>,
          document.getElementById("login")
      );
      }

      if( document.getElementById("sidebar-header")){
        ReactDOM.render(
          <React.StrictMode>
            <SidebarHeader auth={authorize}/>
          </React.StrictMode>,
          document.getElementById("sidebar-header")
        );
      }

      if( document.getElementById("turns")){
        ReactDOM.render(
          <React.StrictMode>
            <Turns auth={authorize}/>
          </React.StrictMode>,
          document.getElementById("turns")
        );
      }

      /*
      
      if (document.getElementById("prueba")) {
        ReactDOM.render(
          <React.StrictMode>
              <Prueba auth={authorize}/>
          </React.StrictMode>,
          document.getElementById("prueba")
      );
      } 

      */

      break;
    case 401:
      
      if (document.getElementById("login")) {
        ReactDOM.render(
          <React.StrictMode>
              <Login auth={authorize}/>
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

    break;
  }



  

}

Render()














