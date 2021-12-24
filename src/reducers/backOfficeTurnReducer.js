import { BACKOFFICE_TURN_TYPES } from '../actions/backofficeTurnActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';
import "../../resources/css/sweetAlert.css"
import { setA } from 'postcss';
import swal from 'sweetalert2';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var todayString =  mm + '/' + dd + '/'+yyyy;


export const BackofficeTurnData = {
    allChairs : ITEM_TURNS.configTurns,
    allChairsSchedule : ITEM_TURNS.configDay,
    editableChair: ITEM_TURNS.configTurns[0],
    editableDay: Object.entries(ITEM_TURNS.configDay[0].days)[0],
    turnsPerday: Object.entries(ITEM_TURNS.configDay[0].days)[0][1].split('/')[2]
}


export function backofficeTurnReducer (state, action){
    switch(action.type){

        case BACKOFFICE_TURN_TYPES.SET_EDITABLE_CHAIR:{
            let newEditable = state.allChairs.find(chair=>chair.id == action.payload);
            return {...state,
                editableChair : newEditable,
        };
        }

        case BACKOFFICE_TURN_TYPES.SET_EDITABLE_DAY:{
            let editableChairSchedule = state.allChairsSchedule.find(chair=>chair.id == state.editableChair.configDay_id);
            let editableDayArray = Object.entries(editableChairSchedule.days)[action.payload];
            console.log(editableDayArray)
            return {...state, editableDay: editableDayArray};
        }
        case BACKOFFICE_TURN_TYPES.LOAD_DATA :{
            return state;
        }

        case BACKOFFICE_TURN_TYPES.ADD_COUNT :{
           
            let newEditableDay = state.editableDay[1].split("/");
            let editableDayTurnsPerday = newEditableDay.pop();
            newEditableDay.push(parseInt(editableDayTurnsPerday)+1)
            newEditableDay = newEditableDay.join('/');
            newEditableDay = [state.editableDay[0],newEditableDay]
            return {...state, turnsPerday: parseInt(state.turnsPerday) +1, editableDay: newEditableDay};
        }

        case BACKOFFICE_TURN_TYPES.REST_COUNT :{
            if (state.turnsPerday <=1) return state;

            let newEditableDay = state.editableDay[1].split("/");
            let editableDayTurnsPerday = newEditableDay.pop();
            newEditableDay.push(parseInt(editableDayTurnsPerday)-1)
            newEditableDay = newEditableDay.join('/');
            newEditableDay = [state.editableDay[0],newEditableDay]
            return {...state, turnsPerday: parseInt(state.turnsPerday) -1, editableDay: newEditableDay};
        }
        
        case BACKOFFICE_TURN_TYPES.GET_DAY_INITAL_COUNT:{
            // console.log(state.allChairsSchedule.days["state.editableDay[0]"]);
            let currentChair = state.allChairsSchedule.find((chair)=>chair.id == state.editableChair.configDay_id)
            let dfaultTurnsPerDay = currentChair.days[state.editableDay[0]].split('/')[2];
            return {...state, turnsPerday: dfaultTurnsPerDay}

        }

        case BACKOFFICE_TURN_TYPES.SET_START_HOUR:{
            let newEditableDay = state.editableDay[1].split("/");
            let startHour = newEditableDay.shift();
            newEditableDay.unshift(action.payload)
            newEditableDay = newEditableDay.join('/');
            newEditableDay = [state.editableDay[0],newEditableDay]
            return {...state, editableDay: newEditableDay};
        }

        case BACKOFFICE_TURN_TYPES.SET_END_HOUR:{
            let newEditableDay = state.editableDay[1].split("/");
            let startHour = newEditableDay.shift();
            newEditableDay.shift();
            newEditableDay.unshift(action.payload)
            newEditableDay.unshift(startHour)
            newEditableDay = newEditableDay.join('/');
            newEditableDay = [state.editableDay[0],newEditableDay]
            return {...state, editableDay: newEditableDay};
        }
         
        case BACKOFFICE_TURN_TYPES.SAVE_CHAIR_SCHEDULE :{
            let turnDataString = document.getElementById("turn-data-string");
            if (turnDataString.value == ""){
                turnDataString = turnDataString.placeholder;
            }else{
                turnDataString = turnDataString.value;
            }

            function validData(str) {
                var pattern = new RegExp(/^[0-2][0-3]:[0-5][0-9][/][0-2][0-3]:[0-5][0-9][/][0-9]{1,2}$/); 
                return !!pattern.test(str);
              }

            if(!validData(turnDataString)){
                swal.fire({
                    text: 'Por respete el formato "09:00/12:00/5"', 
                    position: "bottom",
                    customClass : {
                        container: "add-to-cart-alert-container",
                        popup:"add-to-cart-alert",
                    }
                   });
                return state
            }
            
            let editableChairSchedule = state.allChairsSchedule.find(chair=>chair.id ==state.editableChair.id);
            if (action.payload == "false"){
                // editableChairSchedule.days[state.editableDay[0]] = state.editableDay[1]
                editableChairSchedule.days[state.editableDay[0]] = turnDataString
            }
            else {
                const days=["su","mo","tu","we","th","fr","sa"];
                days.forEach(day=>{
                    // editableChairSchedule.days[day] = state.editableDay[1]
                    editableChairSchedule.days[day] = turnDataString
                })
            }

            editableChairSchedule.update_at = todayString;

            console.log(editableChairSchedule)
            return state
        }

        case BACKOFFICE_TURN_TYPES.SET_CHAIR_NAME : {
            let newEditableChair = state.editableChair;
            if (action.newName != ""){
                newEditableChair.name = action.newName;
            }
            console.log(newEditableChair)
            return state
        }

        case BACKOFFICE_TURN_TYPES.SWITCH_CHAIR_STATUS :{
            let newEditableChair = state.editableChair;
            console.log(newEditableChair.status)
            newEditableChair.status = action.payload
            console.log(newEditableChair.status)
            return {...state, editableChair : newEditableChair}
        }

 

        default :{
            return state;
        }

    }
}