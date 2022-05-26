import React from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { registrationFetch } from "../../redux/thunk/asyncReg";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
    };


    if (data.password === data.password2) {
      dispatch(registrationFetch(data));
      navigate("/");
    } 
  };
  return (
    <div className="container">
      <div className="container">
        <form onSubmit={addUser}>
          <input id="name" type="text" placeholder="имя" className="validate" />
          <input
            id="email"
            type="text"
            placeholder="электронная почта"
            className="validate"
          />
          <input
            id="password"
            minLength="8"
            maxLength="16"
            placeholder="пароль"
            type="password"
            className="validate"
            required
          />
          <input
            id="password2"
            minLength="8"
            maxLength="16"
            placeholder="повторите пароль"
            type="password"
            className="validate"
            required
          />
          <button
            type="submit"
            className="waves-effect waves-light btn-large brown lighten-2"
          >
            Зарегистрироваться<i className="material-icons left"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
