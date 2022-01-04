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

const resetTurnDataString = () =>{
    document.getElementById("turn-data-string").value = "";
}

const resetGlobalSaving = () => {
    let globalSwitch = document.getElementById("flexSwitchCheckDefault");
    if (globalSwitch.getAttribute("aria-checked") == "true"){
        globalSwitch.click();
    }
}


const backofficeTurnMapDispatch = (dispatch)=>{
    return {

        //API

        readAllData: (configDay, configTurn) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.READ_ALL_DATA, dataDay: configDay, dataTurn: configTurn});
        },


        //END

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
            resetHourDefault();
            resetnameDefault();
            resetTurnDataString();
            resetGlobalSaving();
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_EDITABLE_DAY, payload:id[3]});
            dispatch({ type: BACKOFFICE_TURN_TYPES.GET_DAY_INITAL_COUNT});
        },



        setStartHour :(startHour) =>{
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_START_HOUR, payload:startHour});
        },

        setEndHour :(endHour) =>{
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_END_HOUR, payload:endHour});
        },

        saveChairSchedule: (globalSaving, newChairName) => {
            dispatch({ type: BACKOFFICE_TURN_TYPES.SAVE_CHAIR_SCHEDULE, payload: globalSaving});
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_CHAIR_NAME, newName: newChairName});

        },

        saveChairConfig : (actualStatus, newChairName) =>{
            let payloadValue;
            if (actualStatus == "ACTIVE"){
                payloadValue ="NONACTIVE";
            }
            if (actualStatus == "NONACTIVE"){
                payloadValue ="ACTIVE";
            }
            dispatch ({type: BACKOFFICE_TURN_TYPES.SWITCH_CHAIR_STATUS, payload: payloadValue})
            dispatch({ type: BACKOFFICE_TURN_TYPES.SET_CHAIR_NAME, newName: newChairName});
        },

        switchDayStatus : (actualStatus) =>{
            let payloadValue;
            if (actualStatus == "NONACTIVE"){
                payloadValue ="09:00/12:00/4";
            }
            else {
                payloadValue ="NONACTIVE";

            }
            dispatch ({type: BACKOFFICE_TURN_TYPES.SWITCH_DAY_STATUS, payload: payloadValue})
        },

    }
}

export default backofficeTurnMapDispatch