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

//ITEM_USER.user,
//ITEM_USER.role,
//ITEM_USER.role_user,
//ITEM_USER.user

export const usersData = {
    users: null, 
    roles: null, 
    roleUser : null, 
    filteredUsers : null, 
}


export function userReducer(state,action) {
    switch (action.type) {
        case BACKOFFICE_USER_TYPES.READ_ALL_DATA :{

            state.users= action.dataUser
            state.roles= action.dataRole
            state.roleUser = action.dataRoleUser
            state.filteredUsers = action.dataUser

            return state
        }

        case BACKOFFICE_USER_TYPES.CHANGE_USER_VALUE :{
           
            let editableuser = state.users.find(user => user.id == action.userId);
            let returnAllUsers = state.users.filter(user => user.id != action.userId);
            editableuser[action.editableField] = action.payload;
            returnAllUsers.push(editableuser);
            return {...state, users: sortById(returnAllUsers)}

        }
        
        case BACKOFFICE_USER_TYPES.CREATE_NEW_USER: {
            //console.log(action.payload);
            return state
        }
        case BACKOFFICE_USER_TYPES.CHANGE_USER_ROLE : {
            let editableRoleUser = state.roleUser.find(role=>role.user_id == action.userId)
            let allRoleUser = state.roleUser.filter(role=>role.user_id != action.userId);
            editableRoleUser.role_id = action.payload
            allRoleUser.push(editableRoleUser);
            
            return {...state, roleUser :allRoleUser }
        }

        case BACKOFFICE_USER_TYPES.FILTER_BY_NAME :{
            const searchResult = state.users.filter(
                function(product){
                  const search = (product.name).toUpperCase()
                  const stringsearched = action.payload.toUpperCase()
                  return search.indexOf(stringsearched) > -1
                }
              );
            return {...state, filteredUsers: searchResult}
        }
    
        default:
            return state;
    }
}