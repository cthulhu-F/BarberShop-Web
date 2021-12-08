import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import ShopItem from "../componentsShop/ShopItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { TYPES } from "../../../../src/actions/shoppingActions";

const ShoppingCart = () => {
  const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
  const{products, cart} = state;

  const addToCart = (id) =>{
      dispatch({type:TYPES.ADD_TO_CART,payload:id})
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

  return(
      <div>
          <h2> Carrito de Compras </h2>
          <h3> Productos </h3>
          <article className="box row">
            {products.map((product)=>
            <ShopItem key={product.id} data={product} addToCart={addToCart}/>
            )}
          </article>
          
          <h3>Carrito</h3>
          <article className="box">
              <button onClick={cleanCart}>Limpiar carrito</button>
                {cart.map((item, index)=>
                <ShoppingCartItem key ={index} data={item} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart}/>
                )}
          </article>


      </div>
    );

}

export default ShoppingCart

if (document.getElementById("shoppingCart")) {
    ReactDOM.render(
        <React.StrictMode>
            <ShoppingCart />
        </React.StrictMode>,
        document.getElementById("shoppingCart")
    );
  }