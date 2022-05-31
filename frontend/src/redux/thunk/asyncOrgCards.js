import { orgCardsAC } from "../actionCreators/orgCardsAC";


export const getFetchOrgCards = () => {
  return (dispatch)=>{
    fetch('/profile', {
      method: "GET"
    })
    .then((response)=> response.json())
    .then((data) => dispatch(orgCardsAC(data)))
    // .then((data) => console.log('DATAFORORG!!!!!!', data))
  }
}
