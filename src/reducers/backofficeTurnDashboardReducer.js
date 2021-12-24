import { BACKOFFICE_TURN_DASHBOARD_TYPES } from '../actions/backofficeTurnDashboardActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';
import "../../resources/css/sweetAlert.css"
import swal from 'sweetalert2';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var todayString =  dd +'/'+ mm + '/'+yyyy;


export const InitialTurns ={
    allShcheduled : ITEM_TURNS.orderTurns,
    todayScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
    tomorrowScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date != todayString)
}

export const FilteredTurns ={
    allShcheduled : ITEM_TURNS.orderTurns,
    todayScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
    tomorrowScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date != todayString)
}

export function backofficeTurnDashboardReducer(state, action){
    switch(action.type){ 
        case BACKOFFICE_TURN_DASHBOARD_TYPES.RESET_INITIAL_STATE :{
            return InitialTurns
        }

        // case BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TODAYS_SCHEDULE :{
        //     console.log("GET TODAY SHCEDULES");
        //     let todaySchedule = state.shcheduled.filter((turn)=>turn.date == todayString)
        //     console.log(todaySchedule)
           
        //     return {...state, shcheduled : todaySchedule};
        // }

        default :{
            return state;
        }
    }
}