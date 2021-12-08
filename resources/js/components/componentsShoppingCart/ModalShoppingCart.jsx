import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { useReducer } from "react";
import { cartItemsData, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import ShopItem from "../componentsShop/ShopItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { TYPES } from "../../../../src/actions/shoppingActions";

const ModalShoppingCart = () => {
    const [state, dispatch] =useReducer(shoppingReducer,cartItemsData);
    const{products, cart} = state;

    const loadData = ()=>{
      dispatch({type:TYPES.LOAD_DATA});
    }

    const addOneToCart = (id) =>{
      dispatch({type:TYPES.ADD_ONE_TO_CART,payload:id})
      };
    
    const deleteFromCart = (id, all=false) =>{
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
            
        }else {
          dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id});
      }
    }

    const cleanCart = () =>{
      dispatch({type:TYPES.CLEAN_CART})
  }

    return (
      <div className="modal fade" id="shoppingCartModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
        <div className="modal-dialog modal-gl">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title fs-4" id="exampleModalLabel">Carrito <i
                className="bi bi-cart"></i></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            {cart.map((item, index)=>
                <ShoppingCartItem key ={index} data={item} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart}/>
            )}
        
            <button onClick={()=> loadData()} >Load data</button>
           
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Vaciar carrito </button>
              <a href="/shoppingCart" className="btn btn-black">Completar compra</a>
            </div>

          </div>
        </div>
      </div>
    );

}

export default ModalShoppingCart

if (document.getElementById("modalShoppingCart")) {
  ReactDOM.render(
      <React.StrictMode>
          <ModalShoppingCart />
      </React.StrictMode>,
      document.getElementById("modalShoppingCart")
  );
}