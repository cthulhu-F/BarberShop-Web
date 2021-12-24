import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { backofficeTurnDashboardReducer, InitialTurns, FilteredTurns } from "../../src/reducers/backofficeTurnDashboardReducer";
import { BACKOFFICE_TURN_DASHBOARD_TYPES } from "../../src/actions/backofficeTurnDashboardActions";


const backofficeTurnDashboardMapDispatch = (dispatch)=>{
    return {
        resetInitialState: () => {
            dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.RESET_INITIAL_STATE});
        },

        // getTodaySchedule : () =>{
        //     dispatch({ type: BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TODAYS_SCHEDULE});
        // }
    }
}


export default backofficeTurnDashboardMapDispatch
