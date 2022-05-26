import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFetch } from "../../redux/thunk/asyncLogin";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logUser = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // fetch("/login", {
    //   headers: { "content-type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => dispatch(loginUserAC(data)))

    dispatch(loginFetch(data));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={logUser}>
          <input
            id="email"
            type="text"
            placeholder="электронная почта"
            className="validate"
            required
          />
          <input
            id="password"
            minLength="8"
            maxLength="16"
            type="password"
            placeholder="пароль"
            className="validate"
            required
          />

          <button
            type="submit"
            className="waves-effect waves-light btn-large brown lighten-2"
          >
            Авторизоваться<i className="material-icons left"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
