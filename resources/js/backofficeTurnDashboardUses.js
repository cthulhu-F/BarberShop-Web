import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { backofficeTurnDashboardReducer, InitialTurns, FilteredTurns } from "../../src/reducers/backofficeTurnDashboardReducer";
import { BACKOFFICE_TURN_DASHBOARD_TYPES } from "../../src/actions/backofficeTurnDashboardActions";


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var nextYeatr =  parseInt(yyyy) +1
var todayString =  yyyy + '-' + mm + '-' + dd;
var nextYearString = nextYeatr+'-'+ mm +'-'+ dd;

const backofficeTurnDashboardMapDispatch = (dispatch)=>{
    return {
        resetInitialState: () => {
            dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.RESET_INITIAL_STATE});
        },

        getTodaySchedule : () =>{
            // dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TODAYS_SCHEDULE});
        },

        getTomorrowSchedule : () =>{
            // dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TOMOORROW_SCHEDULE});
        },

        filterDashboard : (mindate, maxdate,chairName, todayFlag) =>{
            if (!todayFlag){
                console.log(maxdate)
                if (mindate == "" ){
                    mindate = todayString;
                }
                if (maxdate == "" ){
                    maxdate = nextYearString;
                }
                dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.FILTER_DASHBOARD, min: mindate, max: maxdate, chairName : chairName});
            }
            else{
                dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.FILTER_BY_CHAIR, payload: chairName });

            }
        },

        editTurnSchedule : (date, time, duration, turn) => {
            dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.EDITE_TURN_SCHEDULE, date: date, time: time, duration: duration, turn})
        },

        orderByDate : () =>{
            dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.ORDER_BY_DATE})
        },

        setTurnStatus : (turnId, newStatus) =>{
            dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.SET_TURN_STATUS, newStatus: newStatus, turnId :turnId})
        }

        
    }
}


export default backofficeTurnDashboardMapDispatch
