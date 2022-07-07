import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registrationFetch } from "../../redux/thunk/asyncReg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegModal from "./components/RegModal/RegModal";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Registration() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    dispatch(welcomeAC("Регистрация"));
  }, []);

  const addUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      role: e.target.role.checked,
    };
    const dataUser = await fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
    const resp = await dataUser.json();

    if (resp.text === "true") {
      navigate("/login");
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <Box
        onSubmit={addUser}
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "30ch",
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
            style={{ padding: "2px" }}
            id="name"
            type="text"
            placeholder="имя"
            required
            variant="outlined"
          />
          <TextField
            id="email"
            placeholder="электронная почта"
            required
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ padding: "2px" }}
            id="password"
            placeholder="пароль"
            minLength="8"
            maxLength="16"
            type="password"
            required
            variant="outlined"
          />
          <TextField
            id="password2"
            placeholder="повторите пароль"
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
            Зарегистрироваться
          </Button>
          <h>Организатор</h>

          <Switch
            style={{ color: "#f9db79" }}
            id="role"
            {...label}
            size="small"
          />
          <RegModal active={active} setActive={setActive} />
        </div>
      </Box>
    </>
  );
}

export default Registration;
