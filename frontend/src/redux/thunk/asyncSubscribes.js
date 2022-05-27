import { subscribedAC } from "../actionCreators/subscribesAC";

export const getFetchSubs = (id) => {
  return (dispatch) => {
    fetch(`/profile`)
      .then((response) => response.json())
      // .then((data) => console.log('DATA>>>',data))
      .then((data) => dispatch(subscribedAC(data)));
  };
};
