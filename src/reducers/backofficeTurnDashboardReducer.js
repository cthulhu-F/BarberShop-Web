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

const sortByDate = (nonSortedTurns) =>{
    const sortedTurns =[];
    let sortedOrder = [];
    nonSortedTurns.map((turn)=>
        sortedOrder.push(
            {order : turn.date.split('/')[2]+turn.date.split('/')[1]+turn.date.split('/')[0]+turn.time.split(':')[0]+turn.time.split(':')[1], id: turn.id}
        )
    )
    sortedOrder.sort(function(a, b) {
        return a.order - b.order;
    });

    sortedOrder.map(sortedId=>
        sortedTurns.push(
            ...nonSortedTurns.filter(turn => turn.id == sortedId.id)
        )
    )

    return sortedTurns
}

const filteredByActive = (nonFilteredTurns) =>{
    return nonFilteredTurns.filter(turn => turn.status =="ACTIVE")
}

export const FilteredTurns ={
    allShcheduled : sortByDate(ITEM_TURNS.orderTurns),
    todayScheduled : filteredByActive(sortByDate(ITEM_TURNS.orderTurns.filter((turn)=>turn.date == todayString))),
    tomorrowScheduled : filteredByActive(sortByDate(ITEM_TURNS.orderTurns.filter((turn)=>turn.date != todayString))),
    dashboardTurns : sortByDate(ITEM_TURNS.orderTurns),
}

export function backofficeTurnDashboardReducer(state, action){
    switch(action.type){ 
        case BACKOFFICE_TURN_DASHBOARD_TYPES.RESET_INITIAL_STATE :{
            return allShcheduled
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

            let FilteredBydate =  state.allShcheduled.filter(turn =>
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
                filteredByChair = state.allShcheduled.filter((turn)=>turn.name == action.payload);
            }else {
                filteredByChair = state.allShcheduled
            }

            return {...state, dashboardTurns : filteredByChair};
        }


        case BACKOFFICE_TURN_DASHBOARD_TYPES.EDITE_TURN_SCHEDULE :{
            let allTurnsScheduled = state.allShcheduled;
            let newEditableTurn = action.turn
            let modified = false;

            if (action.date != ""){
                console.log(action.date)
                let newDay = action.date.split('-')
                newEditableTurn.date = newDay[2] + '/' + newDay[1] +'/' +newDay[0]
                modified = true;
            }


            if (action.time != ""){
                console.log(action.time)
                newEditableTurn.time = action.time;
                modified = true;

            }

            if (action.duration != ""){
                newEditableTurn.turn_duration = action.duration;
                modified = true;

            }

            if (modified){
                newEditableTurn.update_at = todayString;
                allTurnsScheduled = allTurnsScheduled.filter((turn)=>turn.id != action.turn.id);
                allTurnsScheduled.push(newEditableTurn)
                console.log(allTurnsScheduled)

                let allScheduleSorted = sortByDate(allTurnsScheduled);
                return {...state, allShcheduled: allScheduleSorted}
            }

            else{
                return state
            }
        }

        case BACKOFFICE_TURN_DASHBOARD_TYPES.ORDER_BY_DATE :{
            return state
        }

        case BACKOFFICE_TURN_DASHBOARD_TYPES.SET_TURN_STATUS :{
            let editableTurn = state.allShcheduled.find(turn=>turn.id == action.turnId);
            let allTurnsScheduled = state.allShcheduled.filter(turn=>turn.id != action.turnId);
            editableTurn.status = action.newStatus;

            allTurnsScheduled.push(editableTurn)

            let allScheduleSorted =sortByDate(allTurnsScheduled);
            console.log(allScheduleSorted)
            return {...state, allShcheduled: allScheduleSorted,
                todayScheduled: filteredByActive(allScheduleSorted.filter((turn)=>turn.date == todayString)),
                tomorrowScheduled: filteredByActive(allScheduleSorted.filter((turn)=>turn.date != todayString)),
                dashboardTurns: state.dashboardTurns,
            }

        }   

        default :{
            return state;
        }
    }
}