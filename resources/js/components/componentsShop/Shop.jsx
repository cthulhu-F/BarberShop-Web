import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constans/ConstItem';
import { cartItemsData, shoppingReducer } from "../../../../src/reducers/shoppingReducer";
import { TYPES } from "../../../../src/actions/shoppingActions";
import ShopItem from "./ShopItem";
import ModalShoppingCart from "../componentsShoppingCart/ModalShoppingCart";
const Shop = () => {
  const [state, dispatch] =useReducer(shoppingReducer,cartItemsData);
  const{products, cart} = state;

  


  const addToCart = mapDispatcht(dispatch).addToCart;

  const addOneToCart = mapDispatcht(dispatch).addOneToCart;

  const deleteFromCart = mapDispatcht(dispatch).deleteFromCart;

  const cleanCart = mapDispatcht(dispatch).cleanCart;


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

          <ModalShoppingCart data={cart} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} addToCart={addToCart} cleanCart={cleanCart}  />
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




