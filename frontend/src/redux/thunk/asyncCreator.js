
import {addCardsAC} from '../actionCreators/orgCardsAC'


export const getFetchCreator = (payload) => {
  console.log("DATAforFETCH", payload);
  return (dispatch) => {
    fetch('/profile', {
      headers:{"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    // .then((payload) => console.log('!!!!!!!!!!!!!!DATA!!!!!!!!!!!!!!!!',payload))
    .then((data) => dispatch(addCardsAC(data)))
  }
}
