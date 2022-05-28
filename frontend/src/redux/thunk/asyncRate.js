import { checkRateAC, rateAC } from "../actionCreators/rateAC";
import { rateReducer } from "../reducers/rateReducer";

export const getFetchRate = (el, rate) => {
  return (dispatch) => {
    // console.log("myRate", el);
    fetch(`/rate/${el}`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ el, rate }),
    });
  };
};

export const getFetchCheckRate = (el) => {
  return (dispatch) => {
    console.log("EL>>>>>>>>>", el);
    fetch(`/rate/${el}`)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => dispatch(rateAC(data)));
  };
};
