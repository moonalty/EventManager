import { loginUserAC } from "../actionCreators/login_user_AC";
import {sessionUserAC} from "../actionCreators/session_user_AC"

export const loginFetch = (payload) => {
  return (dispatch) => {
    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(payload),
    })
     .then((res) => res.json())  
     
      .then((data) => dispatch(loginUserAC(data)))
      // .then((res) => res.json())
      // .then((data) => {
      //   dispatch(sessionUserAC(data));
       
      // });
  };
};


export const sessionFetch = () => {
  return (dispatch) => {
    fetch("/session", {
      headers: { "content-type": "application/json" },
      method: "GET",
    }).then((res) => res.json())
    .then((data) => dispatch(loginUserAC(data)));
  };
};
