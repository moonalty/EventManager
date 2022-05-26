import { REG_USER } from "../actionTypes/reg_user_AT";

export const regUserAC = (payload) => {
  return {
    type: REG_USER,
    payload
  }
}

