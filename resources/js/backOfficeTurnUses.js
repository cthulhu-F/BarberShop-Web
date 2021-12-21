import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { backofficeTurnReducer, BackofficeTurnData } from "../../src/reducers/backOfficeTurnReducer";
import { BACKOFFICE_TURN_TYPES } from "../../src/actions/backofficeTurnActions";

const backofficeTurnMapDispatch = (dispatch)=>{
    return {
        setEditableChair: (id) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_EDITABLE_CHAIR, payload:id});
            // dispatch({ type: BACKOFFICE_TURN_TYPES.SET_EDITABLE_DAY, payload:[0]});

        },
        setEditableDay: (dayPosition) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_EDITABLE_DAY, payload:dayPosition});
        },

        loadData: () => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.LOAD_DATA});
        },

        addCount: () => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.ADD_COUNT});
        },

        restCount: () => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.REST_COUNT});
        },

        getDayInitialCount: () =>{
            dispatch({ type: BACKOFFICE_TURN_TYPES.GET_DAY_INITAL_COUNT});
        }

    }
}

export default backofficeTurnMapDispatch