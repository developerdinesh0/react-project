import * as actionType from "../constants/actionTypes";

const initial_state = {
  token: null,
  loader: false,
  error: null
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionType.SIGNUP_START:
      return {
        ...state,
        loader: action.loader,
        error: action.error,      
      };
    case actionType.SIGNUP_FAIL:    
      return {
        ...state,
        loader: action.loader,
        error: action.error,
      };
    case actionType.SIGNUP_SUCCESS:
      return {
        ...state,
        loader: action.loader,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
