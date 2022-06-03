import { CHANGE_STATE_CARDS} from "../actionTypes/changeStateCards_AT";

export const changeStateCardsAC = (payload) => {
  return {
    type: CHANGE_STATE_CARDS,
    payload
  }
}
