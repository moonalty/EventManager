import {loginUserAC} from '../actionCreators/login_user_AC'

export const registrationFetch = (data) => {
  
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(loginUserAC(data)))
      
  };
};

