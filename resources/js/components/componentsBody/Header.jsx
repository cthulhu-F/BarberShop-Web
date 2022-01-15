import React from "react";
import ReactDOM from "react-dom";

import '../../../css/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';

import { ITEM_IMG } from '../../constants/constImg';

import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import { TYPES } from "../../../../src/actions/shoppingActions";
import { useState } from "react";


const Header = () => {
  
  let URL = window.location.pathname;
  URL = URL.split('/');
  let URLpage = URL[1];
  if (URLpage ==''){
    URLpage ='home';
  }


  let headerClasses ="nav-link link-black border-0";
  let shopClasses ="nav-link link-black border-0";
  
  if (URLpage == 'home'){
    headerClasses= "nav-link link-black border-0 border-dark border-bottom";
  }

  if (URLpage == 'shop'){
    shopClasses= "nav-link link-black border-0 border-dark border-bottom";
  }
 
  // function activeSetter(componentsID){
  //   let options = document.querySelectorAll("#" + componentsID);
  //   console.log(options);
  //   options.forEach((item)=>
  //     console.log(item)
  //   );
  // }

  // activeSetter(headerID);

  const urlImg = require.context('../../../asset/marca', true);

  const[searchValue, setSearchValue] = useState();

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  }


  return(

    <div className="container-fluid">
      <div className="container-md bg-white">

        <nav className="navbar navbar-expand-lg pt-0 bg-white font-h1">
          <div className="container-fluid">

            <a className="navbar-brand text-dark bg-black p-1 pt-1 mt-0 rounded-0 rounded-circle rounded-top overflow-hidden"
              href="#">

              <img 
              src={urlImg(ITEM_IMG.logo).default}
              alt="" 
              width="70" 
              height="70"
              />

            </a>

            <button className="navbar-toggler border" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span> <i className="bi bi-list fs-1"></i> </span>
            </button>

            <div className="collapse navbar-collapse bg-white text-center" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-1 mx-auto">
                <li className="nav-item mx-1 my-1  my-xl-0">
                  <a className={headerClasses} aria-current="page"
                    href="/" >Home</a>
                </li>
                <li className="nav-item mx-1 my-1  my-xl-0">
                  <a className={shopClasses} href="/shop">Shop</a>
                </li>
                <li className="nav-item mx-1 my-1 my-xl-0">
                  <button type="button" className="btn btn-black rounded" href="turn.html" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Reserva tu turno <i className="bi bi-scissors"></i></button>
                </li>
              </ul>

            </div>

            <div className="d-xl-flex d-block my-2">
              <div className="d-flex">
                <input className="form-control me-2" type="search" onChange={onChangeSearch} placeholder="Buscar" aria-label="Search" id="global-header-search-in-shop-input"
                />
                <a href={"/shop/"+searchValue} className="btn btn-black"> <i className="bi bi-search"></i> </a>
                <button className="btn btn-black ms-2" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i
                    className="bi bi-cart"></i></button>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>

  );
}

export default Header

