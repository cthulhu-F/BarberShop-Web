
import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import { shoppingInitialState, shoppingReducer } from "../../src/reducers/shoppingReducer";
import { TYPES } from "../../src/actions/shoppingActions";




const mapDispatcht = (dispatch) => {

    return { 
    addToCart : (id, quantity) =>{
        //for (let i =quantity; i>=1; i--){
            dispatch({type:TYPES.ADD_TO_CART,payload:id, quantity: quantity});
        //};
        },

    addOneToCart : (id, alert=false) =>{

        dispatch({type:TYPES.ADD_ONE_TO_CART,payload:id, alert: alert})},
    
    deleteFromCart : (id, all=false) =>{
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
        }else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id});
        }
    },

    loadData : () =>{
        dispatch({type:TYPES.LOAD_DATA});
    },
    
    cleanCart : () =>{
        dispatch({type:TYPES.CLEAN_CART})
    },

    // increment : () =>{
    //     dispatch({type:TYPES.INCREMENT})
    // },

    // decrement : () =>{
    //     dispatch({type:TYPES.DECREMENT})
    // },

    };
};

export default mapDispatcht

