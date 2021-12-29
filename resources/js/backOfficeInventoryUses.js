import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { BACKOFFICE_INVENTORY_TYPES } from "../../src/actions/backOficeInventoryActions";


const backofficeInventoryMapDispatch = (dispatch)=>{
    return {
        saveProductConfig : (payloadInput, field, productId) =>{
            let payload;
            if (payloadInput == "ACTIVE" && field =="status"){
                payload ="NONACTIVE";
            }
            if (payloadInput == "NONACTIVE" && field =="status"){
                payload ="ACTIVE";
            }
            if(field !="status") payload = payloadInput;

            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.CHANGE_PRODUCT_VALUE, editableField: field , payload: payload, productId : productId})
        },


        filterProducts:(string, categoryId) =>{
            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.FILTERED, payload: string, category: categoryId})
        },

        saveCategoryConfig : (payloadInput, field, categoryId) =>{
            let payload;
            if (payloadInput == "ACTIVE" && field =="status"){
                payload ="NONACTIVE";
            }
            if (payloadInput == "NONACTIVE" && field =="status"){
                payload ="ACTIVE";
            } 
            if(field !="status") payload = payloadInput;
            
            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.CHANGE_CATEGORY_VALUE, editableField: field , payload: payload, categoryId : categoryId})
        },

        createNewCategory : (newName) =>{
            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.CREATE_NEW_CATEGORY, payload: newName})
        }
    }
}

export default backofficeInventoryMapDispatch