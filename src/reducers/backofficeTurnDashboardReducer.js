import { BACKOFFICE_TURN_DASHBOARD_TYPES } from '../actions/backofficeTurnDashboardActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';
import "../../resources/css/sweetAlert.css"
import swal from 'sweetalert2';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var todayString =  dd +'/'+ mm + '/'+yyyy;


// export const InitialTurns ={
//     allShcheduled : ITEM_TURNS.orderTurns,
//     todayScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
//     tomorrowScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date != todayString),
//     dashboardTurns : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
// }

export const FilteredTurns ={
    allShcheduled : ITEM_TURNS.orderTurns,
    todayScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
    tomorrowScheduled : ITEM_TURNS.orderTurns.filter((turn)=>turn.date != todayString),
    dashboardTurns : ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString),
}

export function backofficeTurnDashboardReducer(state, action){
    switch(action.type){ 
        case BACKOFFICE_TURN_DASHBOARD_TYPES.RESET_INITIAL_STATE :{
            return allShcheduled
        }

        case BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TODAYS_SCHEDULE :{           
            return {...state, dashboardTurns : state.todayScheduled};
        }


        case BACKOFFICE_TURN_DASHBOARD_TYPES.GET_TOMOORROW_SCHEDULE :{
            return {...state, dashboardTurns : state.tomorrowScheduled};
        }

        case BACKOFFICE_TURN_DASHBOARD_TYPES.FILTER_DASHBOARD:{
            let dateMin = action.min.split('-')
            let dateYyyy = dateMin[0];
            let dateMm = dateMin[1];
            let dateDd = dateMin[2];
            let compartaiveMin = parseInt(dateYyyy+dateMm+dateDd)

            let dateMax = action.max.split('-')
            let dateYyyyMax = dateMax[0];
            let dateMmMax = dateMax[1];
            let dateDdMax = dateMax[2];
            let compartaiveMax = parseInt(dateYyyyMax+dateMmMax+dateDdMax)
            console.log(compartaiveMin)
            console.log(compartaiveMax)
            console.log(action.chairName)

            let filteredByName;

            let FilteredBydate =  state.tomorrowScheduled.filter(turn =>
                    parseInt(turn.date.split('/')[2]+turn.date.split('/')[1]+turn.date.split('/')[0]) >= compartaiveMin && 
                    parseInt(turn.date.split('/')[2]+turn.date.split('/')[1]+turn.date.split('/')[0]) <= compartaiveMax 
            );


            if(action.chairName != "Ver silla"){
                filteredByName = FilteredBydate.filter(turn=>
                    turn.name == action.chairName
                )
            }else {
                filteredByName = FilteredBydate
            }
            
            return {...state, dashboardTurns : filteredByName};

        }

        case BACKOFFICE_TURN_DASHBOARD_TYPES.FILTER_BY_CHAIR :{
            let filteredByChair
            if(action.payload != "Ver silla"){
                filteredByChair = state.todayScheduled.filter((turn)=>turn.name == action.payload);
            }else {
                filteredByChair = state.todayScheduled
            }

            return {...state, dashboardTurns : filteredByChair};
        }


        default :{
            return state;
        }
    }
}