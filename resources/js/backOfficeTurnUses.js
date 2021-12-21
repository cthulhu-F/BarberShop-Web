import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { backofficeTurnReducer, BackofficeTurnData } from "../../src/reducers/backOfficeTurnReducer";
import { BACKOFFICE_TURN_TYPES } from "../../src/actions/backofficeTurnActions";


const resetHourDefault = ()=>{
    const timers =document.querySelectorAll('#timeFin');
    timers.forEach(timer=>{
        timer.value = "";
    })
}

const resetnameDefault = ()=>{
    const nameInputs =document.querySelectorAll('#editable-chair-name');
    nameInputs.forEach(input=>{
        input.value = "";
        if(!input.ariaDisabled){
            input.ariaDisabled=true;
        }
    })
}

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
        },

        setActiveDay : (id)=>{
            let allDays = document.querySelectorAll('.day-item');
        
            allDays.forEach(day =>{
                if (day.id ==id ){
                    day.classList.add("bg-dark","text-white");
                } else {
                    try{
                        day.classList.remove("bg-dark","text-white");
                    }catch(error){}
                }
            })
            resetHourDefault();
            resetnameDefault();
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_EDITABLE_DAY, payload:id});
            dispatch({ type: BACKOFFICE_TURN_TYPES.GET_DAY_INITAL_COUNT});
        },


        setStartHour :(startHour) =>{
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_START_HOUR, payload:startHour});
        },

        setEndHour :(endHour) =>{
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_END_HOUR, payload:endHour});
        },

        saveChairSchedule: (globalSaving) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.SAVE_CHAIR_SCHEDULE, payload: globalSaving});
        },

        setChairName: (newName) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_CHAIR_NAME, payload: newName});
        },
    }
}

export default backofficeTurnMapDispatch