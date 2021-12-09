import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';
import { shoppingInitialState, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import { TYPES } from "../../../../src/actions/shoppingActions";
import ShopItem from "./ShopItem";
import ModalShoppingCart from "../componentsShoppingCart/ModalShoppingCart";

const Shop = () => {
  const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
  const{products, cart} = state;

  const addToCart = (id) =>{
      dispatch({type:TYPES.ADD_TO_CART,payload:id});

  };

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
    <div className="container-fluid bg-light p-3 min-vh-100">
        <div className="container-md ">
    
          <div className="row row-cols-2 row-cols-xl-4 g-3 g-xl-5 font-p">
    
            <div className="col-12 col-xl-12 border-0">
              <div className="w-100 text-center fw-bold font-h1">
                {products.length} Resultados encontrados
              </div>
            </div>
    
            {products.map((product)=><ShopItem key={product.id} data={product} addToCart={addToCart}/>)}

          </div>
          </div>

          <ModalShoppingCart data={cart} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} cleanCart={cleanCart}  />
        </div>
  );
}

export default Shop

if (document.getElementById("shop")) {
  ReactDOM.render(
      <React.StrictMode>
          <Shop />
      </React.StrictMode>,
      document.getElementById("shop")
  );
}




