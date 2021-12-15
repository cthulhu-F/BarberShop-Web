import { TURN_TYPES } from '../actions/turnActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';

import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useEffect } from 'react';
import "../../resources/css/sweetAlert.css"
import swal from'sweetalert2';


const setHoursAndMinutes= (seconds) =>{
    let hours = Math.floor(seconds/3600);
    seconds -= hours*3600;

    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;

    let output = hours + ":" + minutes;
    return output;
}

const addTime = (initial, aditional) =>{
    let initialTime = initial.split(":");
    let aditionalTime = aditional.split(":");


    let hours = parseInt(initialTime[0])  + parseInt(aditionalTime[0]);
    let minutes = parseInt(initialTime[1]) + parseInt(aditionalTime[1]);
    let newHours = Math.floor(minutes/60);

    hours+= newHours;
    minutes-= newHours*60;

    if(minutes==0){minutes="00"};
    return(hours +':'+minutes);
}



export const turnStateData = {
    chairs: ITEM_TURNS.configTurns,
    day: ITEM_TURNS.configDay,
    schedule:[
        {turn: "07:00"},
        {turn: "08:00"},
        {turn: "09:00"},
        {turn: "10:00"},
        {turn: "11:00"},
        {turn: "12:00"}],

    completeOrder: ITEM_TURNS.orderTurns,
}

export function turnReducer(state, action){
    switch(action.type){
        case TURN_TYPES.GET_AVIABLES_CHAIRS:{
            const activeChairs =[];
            state.chairs.map(chair=> {
                if (chair.status === "ACTIVE"){
                    activeChairs.push(chair);
                }
            });
            return {...state, chairs : activeChairs}
        }


        // case TURN_TYPES.GET_CHAIR_DAYS:{

        // }


        case TURN_TYPES.GET_SCHEDULE:{
            let dateData = action.date.split("-");
            let dt = new Date(dateData) 
            let weekDayIndex = dt.getDay();
            let days=["su","mo","tu","we","th","fr","sa"];
            let weekDay =days[weekDayIndex];
            let chairAviability = state.day.find(chair=>chair.id === action.payload);  
            let daySchedule = chairAviability[weekDay].split("/");
            let turnsAmount = daySchedule[2];
            let open = new Date("December 14, 2021 " + `${daySchedule[0]}` + ":00");
            let colse = new Date("December 14, 2021 "+ `${daySchedule[1]}`+ ":00");
            let difference = ((colse-open)/1000);
            let turnDuration = difference/turnsAmount // En segundos

            turnDuration = setHoursAndMinutes(turnDuration);
            let turn = daySchedule[0]
            let aviableTurns= [{turn:turn}];
            for (let ii = 0; ii<turnsAmount; ii++){
                turn= addTime(turn,turnDuration);
                aviableTurns[ii]={turn:turn};
            }
            return {...state, schedule: aviableTurns};  
        }
        
        case TURN_TYPES.SAVE_TURN:{

        }

        default :{
            return state;
        }

    }
}