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
        loader: true,
        error: null,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
