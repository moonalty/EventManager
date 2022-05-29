
import {creatorAC} from '../actionCreators/creatorAC'


export const getFetchCreator = (data) => {
  console.log("DATAforFETCH", data);
  return (dispatch) => {
    fetch('/profile', {
      headers:{"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => console.log('!!!!!!!!!!!!!!DATA!!!!!!!!!!!!!!!!',data))
    // .then((data) => dispatch(creatorAC(data)))
  }
}
