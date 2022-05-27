
import { LOGIN_USER } from "../actionTypes/login_user_AT";

const initialState = { user: {} };

export const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      
      return { ...state, user: action.payload };
      

   
    default:
      return state;
  }
};
