import { LOGIN_USER} from "../actionTypes/login_user_AT";

export const loginUserAC = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  }
}
