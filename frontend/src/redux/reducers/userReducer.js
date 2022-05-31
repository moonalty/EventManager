
import { LOGIN_USER } from "../actionTypes/login_user_AT";
import { LOGOUT } from "../actionTypes/logoutAT";
import { REG_USER } from "../actionTypes/reg_user_AT";

const initialState = { user: {} };

export const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      
      return { ...state, user: action.payload };

      case REG_USER:
      
        return { ...state, user: action.payload };
      
      case LOGOUT:
        return {...state, user:{}}

   
    default:
      return state;
  }
};

