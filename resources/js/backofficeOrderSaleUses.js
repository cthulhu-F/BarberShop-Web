import React from "react";
import { useReducer } from "react";

import { BACKOFFICE_ORDER_SALES_TYPE } from "../../src/actions/backofficeOrderSaleActions";


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let nextYeatr =  parseInt(yyyy) +1
let lastYeatr =  parseInt(yyyy) -1
let todayString =  yyyy + '-' + mm + '-' + dd;
let nextYearString = nextYeatr+'-'+ mm +'-'+ dd;
let lastYearString = lastYeatr+'-'+ mm +'-'+ dd;

const backofficeOrderSalesMapDispatch = (dispatch)=>{
    return{
        setSaleStatus:(saleId, newStatus) =>{
            dispatch ({type: BACKOFFICE_ORDER_SALES_TYPE.SET_SALE_STATUS, newStatus: newStatus, saleId :saleId})
        },

        readAllData: (data) => {
            dispatch({type: BACKOFFICE_ORDER_SALES_TYPE.READ_ALL_DATA, data: data})
        },

        filterDashboard: (mindate, maxdate,stringSearch) =>{    

            if (mindate == "" ){
                mindate = lastYearString;
            }
            if (maxdate == "" ){
                maxdate = nextYearString;
            }
            dispatch({ type: BACKOFFICE_ORDER_SALES_TYPE.FILTER_DASHBOARD, min: mindate, max: maxdate, stringSearch : stringSearch});
            
        }
    }
}
export default backofficeOrderSalesMapDispatch