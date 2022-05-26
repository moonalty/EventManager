import { regUserAC } from "../actionCreators/reg_user_AC";




export const registrationFetch=()=>{

return (dispatch)=>{

fetch("/registration", {
  headers: { "content-type": "application/json" },
  method: "POST",
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {

    dispatch(regUserAC(data))
    // navigation("/");
  } );
}
}

