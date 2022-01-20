import { TURN_TYPES } from '../actions/turnActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';

import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useEffect } from 'react';
import "../../resources/css/sweetAlert.css"
import swal from'sweetalert2';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var todayString = yyyy + '-' + mm + '-' + dd;

const setHoursAndMinutes= (seconds) =>{
    let hours = Math.floor(seconds/3600);
    seconds -= hours*3600;

    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;

    if (minutes <10){
        minutes = "0"+minutes;
    }

    if (hours <10){
        hours = "0"+hours;
    }

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

    if (minutes <10){
        minutes = "0"+minutes;
    }

    if (hours <10){
        hours = "0"+hours;
    }

    return(hours +':'+minutes);
}


const days=["su","mo","tu","we","th","fr","sa"];

export const turnStateData = {
    chairs: ITEM_TURNS.configTurns,
    chairConfigDay: ITEM_TURNS.configDay,
    day: ITEM_TURNS.configDay.days,
    schedule:[
        {turn: "07:00"},
        {turn: "08:00"},
        {turn: "09:00"},
        {turn: "10:00"},
        {turn: "11:00"},
        {turn: "12:00"}],

    completeOrder: ITEM_TURNS.orderTurns,
    chairIsSelected: false,
    activeChairId: 1,
    selecetDay: todayString,
    hourIsSelected: false,
    selectedHour:"",
    tunrnDuration:"",
    client_data: {
        name_client: "",
        phone_client: "",
        email_client: "",
        client_is_registered: false,
        },
    activeTurns: ITEM_TURNS.activeTurn,
}

export function turnReducer(state, action){
    switch(action.type){
        case TURN_TYPES.READ_ALL_TURN:{
            return Object.assign({}, state, { chairs: action.payload })
        }

        case TURN_TYPES.READ_ALL_DAY:{
            return Object.assign({}, state, { chairConfigDay: action.payload })
        }

        case TURN_TYPES.GET_AVIABLES_CHAIRS:{
            const activeChairs =[];
            state.chairs.map(chair=> {
                if (chair.status === "ACTIVE"){
                    activeChairs.push(chair);
                }
            });
            return {...state, chairs : activeChairs}
        }


        case TURN_TYPES.SET_ACTIVE_CHAIR:{
            return {...state, activeChairId: action.payload, chairIsSelected: true}
        }


        case TURN_TYPES.GET_SCHEDULE:{
            if (action.date =="null"){
                action.date = selecetDay;
            };

            // Get active Day Turns:
            let givenTurns = [];
            let SelecedDateArray = action.date.split("-");
            let SelecedDate = SelecedDateArray[2] + "/" + SelecedDateArray[1] + "/" +SelecedDateArray[0];
            state.activeTurns.map(actveTurn =>{
                if (SelecedDate == actveTurn.date && actveTurn.status == "ACTIVE")
                givenTurns.push(actveTurn.time)
                });

            let dateData = action.date.split("-");
            let dt = new Date(dateData) 
            let weekDayIndex = dt.getDay();
            let weekDay =days[weekDayIndex];
            
            let chairAviability = state.chairConfigDay.find(chair=>chair.id === action.payload);
            //console.log(chairAviability)  
            //console.log("chair");
            //console.log(action.payload);

            let daySchedule = chairAviability.days[weekDay].split("/");
            
            let aviableTurns;
            let turnDuration;
            if (daySchedule != "NONACTIVE" || daySchedule[2] < 1){
                let turnsAmount = daySchedule[2];
                let open = new Date("December 14, 2021 " + `${daySchedule[0]}` + ":00");
                let colse = new Date("December 14, 2021 "+ `${daySchedule[1]}`+ ":00");
                let difference = ((colse-open)/1000);
                turnDuration = difference/turnsAmount // En segundos

                turnDuration = setHoursAndMinutes(turnDuration);
                let turn = daySchedule[0];
                aviableTurns= [{turn:turn}];
                for (let ii = 1; ii<turnsAmount; ii++){
                    turn= addTime(turn,turnDuration);
                    aviableTurns.push({turn:turn});
                }

                aviableTurns = aviableTurns.filter(turn =>{
                    if (!givenTurns.includes(turn.turn))
                        return turn;
                })


                try{
                document.getElementById("inputGroupSelect02").value="Horarios";  
                }catch(error){}

            }

            else {
                aviableTurns = "NONACTIVE";
                turnDuration = "";
            }
            return {...state, schedule: aviableTurns, selecetDay : action.date, selectedHour:"", hourIsSelected: false, turnDuration : turnDuration};  
        }

        case TURN_TYPES.SET_HOUR:{
            if (action.payload =="Horarios"){
                return state;
            }
            return{...state, selectedHour: action.payload, hourIsSelected: true}
        }
        
        case TURN_TYPES.SAVE_TURN:{
            let turnConfirmed = {
                //id: 1,
                name: state.chairs.find((chair)=>chair.id === state.activeChairId).name,
                name_client: state.client_data.name_client,
                email_client: state.client_data.email_client, 
                phone_client: state.client_data.phone_client, 
                date: state.selecetDay,
                time: state.selectedHour,
                turn_duration: state.turnDuration,
                update_at: today, 
                status: "ACTIVE"
                }
            //console.log(turnConfirmed)
            return turnConfirmed;
            
        }

        case TURN_TYPES.SET_USER_DATA:{
            const {name, phone, email} = action.payload
            //console.log(action.payload.name)
            return {...state, client_data: {
                name_client: name,
                phone_client: phone,
                email_client: email,
                client_is_registered: true,
                }
            }
        }

        case TURN_TYPES.GET_BACKOFFICE_SCHEDULE : {
        
            // Get active Day Turns:
            let givenTurns = [];
            let SelecedDateArray = action.date.split("-");
            let SelecedDate = SelecedDateArray[0] + "/" + SelecedDateArray[1] + "/" +SelecedDateArray[2];
            console.log("SelecedDate")
            console.log(SelecedDate)
            state.activeTurns.map(actveTurn =>{
                console.log("actveTurn.date")
                console.log(actveTurn.date)
                if (SelecedDate == actveTurn.date && actveTurn.status == "ACTIVE")
                givenTurns.push(actveTurn.time)
                });

            console.log("given turns");
            console.log(givenTurns)

            let dateData = action.date.split("-");
            let dt = new Date(dateData[1] +"-" + dateData[0]+"-" + dateData[2]) 
            let weekDayIndex = dt.getDay();
            let weekDay =days[weekDayIndex];

            
            let chairCalledId = state.chairs.find(chair=>chair.name === action.payload).id;
            let chairAviability = state.chairConfigDay.find(chair=>chair.id === chairCalledId);

            
            let daySchedule = chairAviability.days[weekDay];
            console.log("daySchedule")
            console.log(daySchedule)

            let dayScheduleSplited= daySchedule != "NONACTIVE" ? daySchedule.split("/") : daySchedule;

            let aviableTurns;
            let turnDuration;
            if (daySchedule != "NONACTIVE" || dayScheduleSplited[2] < 1){
                let turnsAmount = dayScheduleSplited[2];
                let open = new Date("December 14, 2021 " + `${dayScheduleSplited[0]}` + ":00");
                let colse = new Date("December 14, 2021 "+ `${dayScheduleSplited[1]}`+ ":00");
                let difference = ((colse-open)/1000);
                turnDuration = difference/turnsAmount // En segundos

                turnDuration = setHoursAndMinutes(turnDuration);
                let turn = dayScheduleSplited[0];
                console.log("turn")
                console.log(turn)
                aviableTurns= [{turn:turn}];
                for (let ii = 1; ii<turnsAmount; ii++){
                    turn= addTime(turn,turnDuration);
                    aviableTurns.push({turn:turn});
                }

                aviableTurns = aviableTurns.filter(turn =>{
                    if (!givenTurns.includes(turn.turn))
                        return turn;
                })
    
                console.log("aviableTurns")
                console.log(aviableTurns)
            }
            else {
                aviableTurns = "NONACTIVE";
                turnDuration = "";
            }
            return {...state, schedule: aviableTurns ? aviableTurns : "NONACTIVE", hourIsSelected: false, turnDuration : turnDuration ?turnDuration :"" };  
        }


        default :{
            return state;
        }

    }
}