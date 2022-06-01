import { loginUserAC } from "../actionCreators/login_user_AC";
import {sessionUserAC} from "../actionCreators/session_user_AC"

export const loginFetch = (payload) => {
  return (dispatch) => {
    fetch("/login1", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(payload),
    })
     .then((res) => res.json())  
     
      .then((data) => data.text === 'Неверный пароль или логин' ? alert('Неверный пароль или логин') : window.location.assign("/") && dispatch(loginUserAC(data)))
    
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
