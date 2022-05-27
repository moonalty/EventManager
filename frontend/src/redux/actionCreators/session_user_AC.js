import { USER_SESSION } from "../actionTypes/user_session_AT"

export const sessionUserAC = (payload) => {
  return {
    type: USER_SESSION,
    payload
  }
}
