import { BACKOFFICE_TURN_TYPES } from '../actions/backofficeTurnActions';
import { ITEM_TURNS } from '../../resources/js/constants/constTurn';
import "../../resources/css/sweetAlert.css"


export const BackofficeTurnData = {
    allChairs : ITEM_TURNS.configTurns,
    allChairsSchedule : ITEM_TURNS.configDay,
}


export function backofficeTurnReducer (state, action){
    switch(action.type){
        default :{
            return state;
        }

    }
}