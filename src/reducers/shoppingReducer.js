import { TYPES } from '../actions/shoppingActions';
import { ITEM_PRODUCTS } from '../../resources/js/constans/ConstItem';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useEffect } from 'react';
import "../../resources/css/sweetAlert.css"

export const shoppingInitialState = {
    products :ITEM_PRODUCTS.products,
    cart:[],
}

import swal from'sweetalert2';
import { Container } from 'postcss';


const existentCart = JSON.parse(localStorage.getItem('cartData'));

export const cartItemsData = existentCart
    ? { ...existentCart}
    : {products:ITEM_PRODUCTS.products,
            cart:[],
            };




export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product=> product.id === action.payload);

            let itemInCart = state.cart.find(item=> item.id === newItem.id); 

            cartItemsData.cart = itemInCart
            ? {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === newItem.id
                    ? {...item, quantity : action.quantity, stock: state.stock-action.quantity}
                    : item
                ),
            }:{
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: action.quantity, stock: state.stock-action.quantity}],
                };

            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            swal.fire({ title: "Enhorabuena!",
            text: "Ahora tienes " + action.quantity +" "+ newItem.name +" en tu carrito",
            icon:"success",
            timer:"2000",});
            return cartItemsData.cart;
            
        }


        case TYPES.ADD_ONE_TO_CART:{
            let newItem = state.products.find(product=> product.id === action.payload);

            const intemToAdd= state.cart.find((item) => item.id === action.payload);

            cartItemsData.cart =intemToAdd
            ?{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload 
                ? {...item, quantity : item.quantity +1, stock: state.stock-1}
                : item
                ),
            }
            :{
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1,stock: state.stock-1}],
            };

            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            if(action.alert){
                swal.fire({
                text: "Sumaste 1 "+ newItem.name +" en tu carrito",
                timer:"1200", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                },
            });
            }
            return cartItemsData.cart;

        } 


        case TYPES.REMOVE_ONE_FROM_CART:{
            const intemToDelete= state.cart.find((item) => item.id === action.payload);


            cartItemsData.cart =intemToDelete.quantity >1
            ?{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload 
                ? {...item, quantity : item.quantity -1, stock: state.stock+1}
                : item
                ),
            }
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };


            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            return cartItemsData.cart;
        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{
            cartItemsData.cart = {...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                };
            
            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            return cartItemsData.cart;
        }

        case TYPES.CLEAN_CART:{
            cartItemsData.cart= shoppingInitialState;
            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            swal.fire({
                text: "El carrito ha sido vaciado",
                timer:"1200",
                icon: "success",
            });
            return cartItemsData.cart;
        }

        case TYPES.LOAD_DATA:{
            cartItemsData.cart= {...state};
            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart));
            return cartItemsData.cart;
        }

        // case TYPES.INCREMENT:{
        //     return {...state, count: state.count + 1}
        // }

        // case DECREMENT:{
        //     return {...state, count: state.count - 1}
        // }

        default :{
            return state;
        }

    }
}