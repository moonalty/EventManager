import { regUserAC } from "../actionCreators/reg_user_AC";
import {loginUserAC} from "../actionCreators/login_user_AC"

export const registrationFetch = (data) => {
  console.log(data, "asyncReg перед");
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "asyncReg после json");
        dispatch(regUserAC(data));
      });
  };
};

export const sessionFetch = () => {
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => dispatch(loginUserAC(data)));
  };
};
