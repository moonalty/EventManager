import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sessionFetch } from "../../redux/thunk/asyncLogin";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";
import RegModal from "../Registration/components/RegModal/RegModal";
import Button from "@mui/material/Button";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    dispatch(welcomeAC("Войти в аккаунт"));
  }, []);

  const logUser = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);
    const dataUser = await fetch("/login1", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
    const resp = await dataUser.json();
    if (resp.text === "true") {
      navigate("/");
    } else {
      setActive(true);
    }

    dispatch(sessionFetch());
  };

  return (
    <>
      <Box
        className="login"
        onSubmit={logUser}
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            display: "box",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20",
            textAlign: "center",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="email"
            placeholder="электронная почта"
            required
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="password"
            placeholder="пароль"
            minLength="8"
            maxLength="16"
            type="password"
            required
            variant="outlined"
          />
        </div>
        <div>
          <Button
            style={{ padding: "2px", color: "#000000" }}
            aria-label="fingerprint"
            color="success"
            type="submit"
          >
            Авторизоваться
          </Button>
          <RegModal active={active} setActive={setActive} />
        </div>
      </Box>
    </>
  );
}
export default Login;
