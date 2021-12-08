import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_IMG } from '../../constans/constImg';

import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import { TYPES } from "../../../../src/actions/shoppingActions";


const Header = () => {

  const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
  const{products, cart} = state;

  const loadData = ()=>{
    dispatch({type:TYPES.LOAD_DATA});
  }

  const urlImg = require.context('../../../asset/marca', true);

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
                  <a className="nav-link link-black border-0 border-dark border-bottom" aria-current="page"
                    href="/">Home</a>
                </li>
                <li className="nav-item mx-1 my-1  my-xl-0">
                  <a className="nav-link link-black" href="/shop">Shop</a>
                </li>
                <li className="nav-item mx-1 my-1 my-xl-0">
                  <button type="button" className="btn btn-black rounded" href="turn.html" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Reserva tu turno <i className="bi bi-scissors"></i></button>
                </li>
              </ul>

            </div>

            <div className="d-xl-flex d-block my-2">
              <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-black" type="submit"><i className="bi bi-search"></i></button>
                <button className="btn btn-black ms-2" data-bs-toggle="modal" data-bs-target="#shoppingCartModal" onClick={()=> loadData()}><i
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

