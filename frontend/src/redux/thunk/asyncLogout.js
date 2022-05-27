import { getFetchlogout } from "../actionCreators/logoutAC";

export const getFetchLogout = () => {
  return (dispatch) => {
    fetch("/logout")
      .then((response) => response.json())
      .then((data) => console.log(data.text));

  };
};
