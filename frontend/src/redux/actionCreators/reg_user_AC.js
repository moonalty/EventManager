import { REG_USER } from "../actionTypes/reg_user_AT";
import {CHECK_USER} from "../actionTypes/check_userAT"

export const regUserAC = (payload) => {
  return {
    type: REG_USER,
    payload
  }
}


export const checkUserAC = (payload) =>{

  return {
    type: CHECK_USER,
    payload
  }

}
