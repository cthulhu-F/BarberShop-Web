import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
//import { ITEM_PRODUCTS } from '../../constants/ConstItem';
import SliderItem from './SliderItem';

  /*MODAL SHOP IMPORTS*/
import { useReducer } from 'react';
import { shoppingReducer, cartItemsData, shoppingInitialState} from '../../../../src/reducers/shoppingReducer';
import mapDispatcht from '../../shoppingCartUses';
import ModalShoppingCart from '../componentsShoppingCart/ModalShoppingCart';
import { useEffect } from 'react';
import {ShowAllProducts, ShowAllCategories} from '../../helpers/ItemHelpers';
import { useState } from 'react';



const Slider = () => {


  /*MODAL SHOP ASSETS*/
  const [state, dispatch] =useReducer(shoppingReducer,shoppingInitialState);
  const{products, cart} = state;

  /* APPI CRUD */

  const readAllData = mapDispatcht(dispatch).readAllData;

  /* END */

  const addToCart = mapDispatcht(dispatch).addToCart;

  const addOneToCart = mapDispatcht(dispatch).addOneToCart;

  const deleteFromCart = mapDispatcht(dispatch).deleteFromCart;

  const cleanCart = mapDispatcht(dispatch).cleanCart;

  const[item, setItem] = useState(products)

  let SliderProducts_1 = item.slice(0, 4);

  useEffect(()=> {
    const showItem = async () => {
      const resItem = await ShowAllProducts();
      const resCategorie = await ShowAllCategories();
      readAllData(resItem, resCategorie);
      setItem(resItem);
    }
    showItem();
  },[])


  return(

    <div class="row row-cols-1 row-cols-xl-4 bg-light">
              
              {SliderProducts_1.map((item) => <SliderItem key={item.id} data={item} addOneToCart={addOneToCart}/>)}

              <ModalShoppingCart data={cart} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} addToCart={addToCart} cleanCart={cleanCart}  />
              
    </div>


   
  );
}

export default Slider
