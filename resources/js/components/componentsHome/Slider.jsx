import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/main.css';
import { ITEM_PRODUCTS } from '../../constants/ConstItem';
import SliderItem from './SliderItem';

  /*MODAL SHOP IMPORTS*/
import { useReducer } from 'react';
import { shoppingReducer, cartItemsData} from '../../../../src/reducers/shoppingReducer';
import mapDispatcht from '../../shoppingCartUses';
import ModalShoppingCart from '../componentsShoppingCart/ModalShoppingCart';

const Slider = () => {

  

  /*MODAL SHOP ASSETS*/
  const [state, dispatch] =useReducer(shoppingReducer,cartItemsData);
  const{products, cart} = state;

  const addToCart = mapDispatcht(dispatch).addToCart;

  const addOneToCart = mapDispatcht(dispatch).addOneToCart;

  const deleteFromCart = mapDispatcht(dispatch).deleteFromCart;

  const cleanCart = mapDispatcht(dispatch).cleanCart;


  let SliderProducts_1 = products.slice(0, 4);

  const bgBlack = {backgroundColor: "#000"}

  return(

    <div class="row row-cols-1 row-cols-xl-4 border-0 border-bottom pb-5 mb-5" style={bgBlack}>
              
              {SliderProducts_1.map((item) => <SliderItem key={item.id} data={item} addOneToCart={addOneToCart}/>)}

              <ModalShoppingCart data={cart} deleteFromCart={deleteFromCart} addOneToCart={addOneToCart} addToCart={addToCart} cleanCart={cleanCart}  />
              
    </div>


   
  );
}

export default Slider
