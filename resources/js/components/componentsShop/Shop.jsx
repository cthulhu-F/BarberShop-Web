import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ITEM_PRODUCTS } from '../../constants/ConstItem';
import { TYPES } from "../../../../src/actions/shoppingActions";
import ShopItem from "./ShopItem";

  /*MODAL SHOP IMPORTS*/
  import { useReducer } from 'react';
  import { shoppingReducer, cartItemsData} from '../../../../src/reducers/shoppingReducer';
  import mapDispatcht from '../../shoppingCartUses';
  import ModalShoppingCart from '../componentsShoppingCart/ModalShoppingCart';


const Shop = () => {

  /*MODAL SHOP ASSETS*/
  const [state, dispatch] =useReducer(shoppingReducer,cartItemsData);
  const{products, cart, categories} = state;

  const addToCart = mapDispatcht(dispatch).addToCart;

  const addOneToCart = mapDispatcht(dispatch).addOneToCart;

  const deleteFromCart = mapDispatcht(dispatch).deleteFromCart;

  const cleanCart = mapDispatcht(dispatch).cleanCart;

  let URL = window.location.pathname;
  URL = URL.split('/') ? URL.split('/') : "";
  let searchValue ="";
  try{
    searchValue = URL[2].split('%20').join(' ')
    searchValue = searchValue.replace("%C3%A1", "á").replace("%C3%A9", "é").replace("%C3%AD", "í").replace("%C3%B3", "ó").replace("%C3%BA", "ú").replace('%C3%BC', 'ü')
  }catch(error){}

  const searchResult = products.filter(
    function(product){
      const id = toString(product.id)
      const name = product.name
      const sku = toString(product.sku)
      const description = product.description
      const price = toString(product.price)
      const category = categories.find(category=> category.id == product.categories_id).name
      const search = (id+" "+name + " " +sku + " " + description + " " + price + " " + category).toUpperCase()
      const stringsearched = searchValue.toUpperCase()
      return search.indexOf(stringsearched) > -1
    }
  );

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




