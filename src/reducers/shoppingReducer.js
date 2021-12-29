import { TYPES } from '../actions/shoppingActions';
import { ITEM_PRODUCTS } from '../../resources/js/constants/ConstItem';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useEffect } from 'react';
import "../../resources/css/sweetAlert.css"


const existentCart = JSON.parse(localStorage.getItem('cartData'));

export const cartItemsData = existentCart
    ? [...existentCart]
    : [];

export const shoppingInitialState = {
    products: ITEM_PRODUCTS.products,
    cart: cartItemsData,
}

import swal from 'sweetalert2';
import { Container } from 'postcss';


export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA: {
            return Object.assign({}, state, { products: action.payload })
        }
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            cartItemsData.cart = itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: action.quantity, stock: state.stock - action.quantity }
                            : item
                    ),
                } : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: action.quantity, stock: state.stock - action.quantity }],
                };

            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart.cart));
            swal.fire({
                title: "Enhorabuena!",
                text: "Ahora tienes " + action.quantity + " " + newItem.name + " en tu carrito",
                icon: "success",
                timer: "2000",
            });

            return cartItemsData.cart;
        }


        case TYPES.ADD_ONE_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);

            const intemToAdd = state.cart.find((item) => item.id === action.payload);

            cartItemsData.cart = intemToAdd
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1, stock: item.stock - 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1, stock: newItem.stock - 1 }],
                };

            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart.cart));

            if (action.alert) {


                swal.fire({
                    //icon: 'success',
                    text: "Sumaste 1 " + newItem.name + " en tu carrito",
                    timer: "1200",
                    timerProgressBar: true,
                    position: "bottom",
                    showConfirmButton: false,
                    customClass: {
                        container: "add-to-cart-alert-container",
                        popup: "add-to-cart-alert",
                    },
                });

            }

            return cartItemsData.cart;

        }


        case TYPES.REMOVE_ONE_FROM_CART: {
            const intemToDelete = state.cart.find((item) => item.id === action.payload);


            cartItemsData.cart = intemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1, stock: item.stock + 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                };


            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart.cart));
            return cartItemsData.cart;
        }

        case TYPES.REMOVE_ALL_FROM_CART: {
            cartItemsData.cart = {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };

            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart.cart));
            return cartItemsData.cart;
        }

        case TYPES.CLEAN_CART: {
            cartItemsData.cart = {
                ...state,
                cart: [],
            };
            localStorage.clear();
            swal.fire({
                text: "El carrito ha sido vaciado",
                timer: "1200",
                icon: "success",
            });
            return cartItemsData.cart;
        }

        case TYPES.LOAD_DATA: {
            cartItemsData.cart = { ...state };
            localStorage.setItem('cartData', JSON.stringify(cartItemsData.cart.cart));
            return cartItemsData.cart;
        }

        // case TYPES.INCREMENT:{
        //     return {...state, count: state.count + 1}
        // }

        // case DECREMENT:{
        //     return {...state, count: state.count - 1}
        // }

        default: {
            return state;
        }

    }
}