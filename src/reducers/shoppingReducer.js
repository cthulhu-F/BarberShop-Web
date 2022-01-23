import { TYPES } from '../actions/shoppingActions';
import { ITEM_PRODUCTS } from '../../resources/js/constants/ConstItem';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useEffect } from 'react';
import "../../resources/css/sweetAlert.css"

let existentCart = JSON.parse(localStorage.getItem('cartData'));

export const cartItemsData = existentCart
    ? [...existentCart]
    : []

export const shoppingInitialState = {
    products: null, //ITEM_PRODUCTS.products,
    cart: cartItemsData,
    categories: null, //ITEM_PRODUCTS.categories,
}

import swal from'sweetalert2';
import { Container } from 'postcss';

/*
if (!JSON.parse(localStorage.getItem('cartData'))){
    localStorage.setItem('cartData', JSON.stringify(shoppingInitialState));
}
*/



export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA: {

            state.products = action.dataItem;
            state.categories = action.dataCategorie

            return state
        }
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            let cartItemsDataExport = itemInCart
            ? {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === newItem.id
                    ? {...item, quantity : action.quantity}
                    : item
                ),
            }:{
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: action.quantity}],
                };

                

            localStorage.setItem('cartData', JSON.stringify(cartItemsDataExport.cart));
            swal.fire({ title: "Enhorabuena!",
            text: "Ahora tienes " + action.quantity +" "+ newItem.name +" en tu carrito",
            icon:"success",
            timer:"2000",});
            
            return cartItemsDataExport;
            
            
        }


        case TYPES.ADD_ONE_TO_CART:{
            let newItem = state.products.find(product=> product.id === action.payload);

            const intemToAdd= state.cart.find((item) => item.id === action.payload);

            let cartItemsDataExport =intemToAdd
            ?{
                ...state,
                cart: state.cart.map(item=> item.id === action.payload 
                ? {...item, quantity : item.quantity +1}
                : item
                ),
            }
            :{
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1}],
            };


            localStorage.setItem('cartData', JSON.stringify(cartItemsDataExport.cart));

            
            if(action.alert){
                swal.fire({
                text: "Sumaste 1 "+ newItem.name +" en tu carrito",
                timer:"1200", 
                position: "bottom",
                customClass : {
                    container: "add-to-cart-alert-container",
                    popup:"add-to-cart-alert",
                },
            }).then(()=>{
                
            })
            }
            
            return cartItemsDataExport;

        }


        case TYPES.REMOVE_ONE_FROM_CART: {
            const intemToDelete = state.cart.find((item) => item.id === action.payload);

            try{
                const button = document.getElementById(`add-one-item-${action.payload}-to-cart`);
                button.disabled = intemToDelete.quantity > intemToDelete.stock ? true : false;
            }catch(error){}

            let cartItemsDataExport = intemToDelete.quantity >1
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


            localStorage.setItem('cartData', JSON.stringify(cartItemsDataExport.cart));
            return cartItemsDataExport;
        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{
            let cartItemsDataExport = {...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                };
            
            localStorage.setItem('cartData', JSON.stringify(cartItemsDataExport.cart));
            return cartItemsDataExport;
        }

        case TYPES.CLEAN_CART:{
            localStorage.clear()
            swal.fire({
                text: "El carrito ha sido vaciado",
                timer: "1200",
                icon: "success",
            });
            return {...state, cart: state.cart = [],};
        }

        case TYPES.LOAD_DATA:{
            let cartItemsDataExport= {...state};
            localStorage.setItem('cartData', JSON.stringify(cartItemsDataExport.cart));
            return cartItemsDataExport;
        }

        // case TYPES.INCREMENT:{
        //     return {...state, count: state.count + 1}
        // }

        // case DECREMENT:{
        //     return {...state, count: state.count - 1}
        // }

        case TYPES.QUANTITY_ALERT :{
            let editableProduct = state.cart.find(product=>product.id == action.payload)
            if(editableProduct){
                if(editableProduct.quantity>=editableProduct.stock-1){

                    try{
                        const button = document.getElementById(`add-one-item-${action.payload}-to-cart`);
                        button.disabled = true;
                    }catch(error){}
                    swal.fire({
                        text: `Alcanzaste el límite de ${editableProduct.stock} ${editableProduct.name}`,
                        timer:"2000", 
                        position: "bottom",
                        showConfirmButton: false,
                        customClass : {
                            container: "add-to-cart-alert-container",
                            popup:"add-to-cart-alert",
                        }
                    });
                }
            }
           
            return state;
        }
        default :{
            return state;
        }

    }
}