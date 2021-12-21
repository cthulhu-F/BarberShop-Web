

const initState = {
  currentUser: null,
  isAuthenticated: false
};


export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      {
        return {
          ...state,
          currentUser: action.payload,
          isAuthenticated: action.payload !== false
        }
      }
      default:
        return state;
  }
}