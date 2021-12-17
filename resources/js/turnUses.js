
import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import { turnReducer, turnState } from "../../src/reducers/turnReducer";
import { TURN_TYPES } from "../../src/actions/turnActions";



const turnMapDispatcht = (dispatch) => {

    return {
        getChairs: () => {
            dispatch({ type: TURN_TYPES.GET_AVIABLES_CHAIRS});
        },

        // getDays: (id) => {
        //     dispatch({ type: TURN_TYPES.GET_CHAIR_DAYS});
        // },

        setActiveChair: (id) =>{
            dispatch({type: TURN_TYPES.SET_ACTIVE_CHAIR, payload:id});
        },

        getSchedule: (id, date= "22-12-202") => {
            dispatch({ type: TURN_TYPES.GET_SCHEDULE , payload:id, date:date});            
        },

        setHour: (hour)=>{
            dispatch({ type: TURN_TYPES.SET_HOUR , payload:hour});            
        },

        saveTurn: (id) => {
            dispatch({ type: TURN_TYPES.SAVE_TURN, payload:id});
        },

        setUserData:(data)=>{
            dispatch({ type: TURN_TYPES.SAVE_TURN, payload: data});
        },

        setTurnData:(data)=>{
            dispatch({ type: TURN_TYPES.SET_TURN_DATA, payload: data});
        }
    };
};

export default turnMapDispatcht

