
import {creatorAC} from '../actionCreators/creatorAC'


export const getFetchCreator = () => {
  return (dispatch) => {
    fetch('/profile')
    .then((response) => response.json())
    .then((data) => dispatch(creatorAC(data)))
  }
}
