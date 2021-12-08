import { TYPES } from '../actions/shoppingActions';
import { ITEM_PRODUCTS } from '../../resources/js/constans/ConstItem';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

export const shoppingInitialState = {
    products :ITEM_PRODUCTS.products,
    cart:[],
}


export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product=> product.id === action.payload);

            let itemInCart = state.cart.find((item)=> item.id === newItem.id); 

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => 
                        item.id === newItem.id
                        ? {...item, quantity : item.quantity + 1}
                        : item
                    ),
                }:{
                        ...state,
                        cart: [...state.cart, { ...newItem, quantity:1}],
                    };

            
        }

        case TYPES.ADD_ONE_TO_CART:{
            let itemToAdd = state.cart.find((item)=> item.id === newItem.id); 
            return {...state,
                cart: [...state.cart, { ...itemToAdd, quantity:1}],};
        }

        case TYPES.REMOVE_ONE_FROM_CART:{
            const intemToDelete= state.cart.find((item) => item.id === action.payload);

            return intemToDelete.quantity >1
            ?{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload 
                ? {...item, quantity : item.quantity -1}
                : item
                ),
            }
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {...state,
            cart: state.cart.filter(item => item.id !== action.payload),
            };
        }

        case TYPES.CLEAN_CART:{
            return shoppingInitialState;
        }

        default :{
            return state;
        }

    }
}