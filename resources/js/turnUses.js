
import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import { turnReducer, turnState } from "../../src/reducers/turnReducer";
import { TURN_TYPES } from "../../src/actions/turnActions";



const turnMapDispatcht = (dispatch) => {

    return {

        //API DATA

        readAllOrderTurn: (data) => {
            dispatch({type: TURN_TYPES.READ_ALL_ORDER, payload: data});
        },

        readAllTurn: (data) => {
            dispatch({ type: TURN_TYPES.READ_ALL_TURN, payload: data});
        },

        readAllDay: (data) => {
            dispatch({ type: TURN_TYPES.READ_ALL_DAY, payload: data});
        },

        //END

        getChairs: () => {
            dispatch({ type: TURN_TYPES.GET_AVIABLES_CHAIRS});
        },

        // getDays: (id) => {
        //     dispatch({ type: TURN_TYPES.GET_CHAIR_DAYS});
        // },

        setActiveChair: (id) =>{
            dispatch({type: TURN_TYPES.SET_ACTIVE_CHAIR, payload:id});
        },

        getSchedule: (id, date= "null") => {
            dispatch({ type: TURN_TYPES.GET_SCHEDULE , payload:id, date:date});            
        },

        setHour: (hour)=>{
            dispatch({ type: TURN_TYPES.SET_HOUR , payload:hour});            
        },

        saveTurn: () => {
            dispatch({ type: TURN_TYPES.SAVE_TURN});
        },

        setUserData:(data)=>{
            dispatch({ type: TURN_TYPES.SET_USER_DATA, payload: data});
        },

        getBackofficeSchedule:(chairName, date)=>{
            dispatch({ type: TURN_TYPES.GET_BACKOFFICE_SCHEDULE , payload:chairName, date:date});            
        }


    };
};

export default turnMapDispatcht

