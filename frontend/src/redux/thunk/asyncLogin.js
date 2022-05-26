import { loginUserAC } from "../actionCreators/login_user_AC";
export const loginFetch=(data)=>{

  return (dispatch)=>{

fetch("/login", {
  headers: { "content-type": "application/json" },
  method: "POST",
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => dispatch(loginUserAC(data)))
  }}
