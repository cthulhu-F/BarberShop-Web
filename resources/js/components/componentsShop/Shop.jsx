import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constants/ConstItem';
import { TYPES } from "../../../../src/actions/shoppingActions";
import ShopItem from "./ShopItem";

  /*MODAL SHOP IMPORTS*/
  import { useReducer, useEffect } from 'react';
  import { shoppingReducer, cartItemsData, shoppingInitialState} from '../../../../src/reducers/shoppingReducer';
  import mapDispatcht from '../../shoppingCartUses';
  import ModalShoppingCart from '../componentsShoppingCart/ModalShoppingCart';
  import ShowAllProducts from "../../helpers/ItemHelpers";


const Shop = () => {
  

  /*MODAL SHOP ASSETS*/
  const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
  const{products, cart} = state;

  const readAllData = mapDispatcht(dispatch).readAllData;

  const addToCart = mapDispatcht(dispatch).addToCart;

  const addOneToCart = mapDispatcht(dispatch).addOneToCart;

  const deleteFromCart = mapDispatcht(dispatch).deleteFromCart;

  const cleanCart = mapDispatcht(dispatch).cleanCart;

  useEffect(()=> {
    const showItem = async () => {
      const res = await ShowAllProducts();
      readAllData(res);
    }
    showItem();
  },[])


  return (

   
    <div className="container-fluid bg-light p-3 min-vh-100">
        <div className="container-md ">
    
          <div className="row row-cols-2 row-cols-xl-4 g-3 g-xl-5 font-p">
    
            <div className="col-12 col-xl-12 border-0">
              <div className="w-100 text-center fw-bold font-h1">
                
               { searchValue

                ? `${searchResult.length} Resultados encontrados para "${searchValue}"`
                : ""
              
              }
              </div>
            </div>
            {/* || data.description.includes(searchValue) || data.id.includes(searchValue) || data.sku.includes(searchValue */}
            { searchValue != ""
            ? searchResult.map((product)=><ShopItem key={product.id} data={product} addToCart={addToCart} addOneToCart={addOneToCart} cart={cart}/>)
            : products.map((product)=><ShopItem key={product.id} data={product} addToCart={addToCart} addOneToCart={addOneToCart} cart={cart}/>)

          }
            
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




