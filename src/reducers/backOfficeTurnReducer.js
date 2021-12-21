import { BACKOFFICE_TURN_TYPES } from '../actions/backofficeTurnActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';
import "../../resources/css/sweetAlert.css"
import { CssSyntaxError } from 'postcss';


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
            // let editabledayMap = new Map([
            //     [editableDayArray[0],
            //     editableDayArray[1]]
            //   ]);
            // let editableDayObj = Object.fromEntries(editabledayMap);
            console.log(editableDayArray)
            return {...state, editableDay: editableDayArray};
        }
        case BACKOFFICE_TURN_TYPES.LOAD_DATA :{
            return state;
        }

        case BACKOFFICE_TURN_TYPES.ADD_COUNT :{
            return {...state, turnsPerday: parseInt(state.turnsPerday) +1}
        }

        case BACKOFFICE_TURN_TYPES.REST_COUNT :{
            if (state.turnsPerday <=1) return state;
            return {...state, turnsPerday: parseInt(state.turnsPerday) -1};
        }
        
        case BACKOFFICE_TURN_TYPES.GET_DAY_INITAL_COUNT:{
            // console.log(state.allChairsSchedule.days["state.editableDay[0]"]);
            let currentChair = state.allChairsSchedule.find((chair)=>chair.id == state.editableChair.configDay_id)
            let dfaultTurnsPerDay = currentChair.days[state.editableDay[0]].split('/')[2];
            return {...state, turnsPerday: dfaultTurnsPerDay}

        }

        default :{
            return state;
        }

    }
}