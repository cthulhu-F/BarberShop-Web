import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { BACKOFFICE_INVENTORY_TYPES } from "../../src/actions/backOficeInventoryActions";


const backofficeInventoryMapDispatch = (dispatch)=>{
    return {
        saveProductConfig : (payload, field, productId) =>{
            if (payload == "ACTIVE"){
                payload ="NONACTIVE";
            }
            if (payload == "NONACTIVE"){
                payload ="ACTIVE";
            }
            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.CHANGE_PRODUCT_VALUE, editableField: field , payload: payload, productId : productId})
        },


        filterProducts:(string, categoryId) =>{
            dispatch ({type: BACKOFFICE_INVENTORY_TYPES.FILTERED, payload: string, category: categoryId})
        }
    }
}

export default backofficeInventoryMapDispatch