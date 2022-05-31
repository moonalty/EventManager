import {CREATOR} from '../actionTypes/creatorAT'

const initialState = {creators : []}

export const creatorReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATOR:
      console.log('CARDDATA!!!!!!!!!!', action.payload);
      return {...state, creators: action.payload}
      default:
        return state
  }
} 
