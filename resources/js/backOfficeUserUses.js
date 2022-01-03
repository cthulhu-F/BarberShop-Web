import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import { userReducer, usersData } from "../../src/reducers/backOfficeUserReducer";
import { BACKOFFICE_USER_TYPES } from "../../src/actions/backofficeUserActions";



const backofficeUserDispatch = (dispatch)=>{
    return {
        saveUserConfig : (payloadInput, field, userId) =>{
            let payload;
            if (payloadInput == "ACTIVE" && field =="status"){
                payload ="NONACTIVE";
            }
            if (payloadInput == "NONACTIVE" && field =="status"){
                payload ="ACTIVE";
            }
            if(field !="status") payload = payloadInput;

            dispatch ({type: BACKOFFICE_USER_TYPES.CHANGE_USER_VALUE, editableField: field , payload: payload, userId : userId})
        },

        createNewUser : (newUserData) =>{
            dispatch ({type: BACKOFFICE_USER_TYPES.CREATE_NEW_USER, payload: newUserData})
        },
        changeUserRole : (newRoleId,userId)=>{
            dispatch ({type: BACKOFFICE_USER_TYPES.CHANGE_USER_ROLE, payload: newRoleId, userId:userId})
        }
    }
}

export default backofficeUserDispatch