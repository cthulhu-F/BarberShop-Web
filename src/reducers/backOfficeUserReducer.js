import { BACKOFFICE_USER_TYPES } from '../actions/backofficeUserActions';
import { ITEM_USER } from '../../resources/js/constants/constUser';


const sortById = (nonSorted) =>{
    const sortedElements =[];
    let sortedOrder = [];
    nonSorted.map((chair)=>
        sortedOrder.push(
            {order : chair.id}
        )
    )
    sortedOrder.sort(function(a, b) {
        return a.order - b.order;
    });

    sortedOrder.map(sortedId=>
        sortedElements.push(
            ...nonSorted.filter(turn => turn.id == sortedId.order)
        )
    )
    return sortedElements
}


export const usersData = {
    users: ITEM_USER.user,
    roles: ITEM_USER.roles,
}


export function userReducer(state,action) {
    switch (action.type) {

        case BACKOFFICE_USER_TYPES.CHANGE_USER_VALUE :{
           
            let editableuser = state.users.find(user => user.id == action.userId);
            let returnAllUsers = state.users.filter(user => user.id != action.userId);
            editableuser[action.editableField] = action.payload;
            returnAllUsers.push(editableuser);
            return {...state, users: sortById(returnAllUsers)}

        }
        
        case BACKOFFICE_USER_TYPES.CREATE_NEW_USER: {
            console.log(payload);
            return state
        }

    
        default:
            return state;
    }
}