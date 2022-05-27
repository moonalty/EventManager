import { subscribedAC } from "../actionCreators/subscribesAC";

export const getFetchSubs = (id) => {
  return (dispatch) => {
    fetch(`/profile`)
      .then((response) => response.json())
      .then((data) => dispatch(subscribedAC(data)));
      // .then((data) => console.log("DATA>>>", data));
  };
};
