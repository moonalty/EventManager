import {CREATOR} from '../actionTypes/creatorAT'

const initialState = {creators : []}

export const creatorReducer = (state = initialState, action) => {
  console.log('CARDDATA!!!!!!!!!!', action.payload);
  switch(action.type){
    case CREATOR:
      return {...state, creators: action.payload}
      default:
        return state
  }
} 
