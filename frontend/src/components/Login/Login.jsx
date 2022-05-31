import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFetch } from "../../redux/thunk/asyncLogin";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";

import Button from '@mui/material/Button';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(welcomeAC('Войти в аккаунт'))
  }, [])

  const logUser = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };


    dispatch(loginFetch(data));
    // if(!localStorage.getItem('user')){  
    //   localStorage.setItem('user',data.email) 
    // }else{
    //   localStorage.removeItem('user') 
    //   localStorage.setItem('user',data.email) 
    // }


    
    //navigate("/");
  };

  return (

<Box className="login"  onSubmit={logUser}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' , display: "box" , marginLeft: 'auto',
      marginRight:'auto', padding:'20', textAlign:'center' },
    
    }}
    noValidate
    autoComplete="off"
  >
   <div >

  <TextField id="email" placeholder="электронная почта" required  variant="outlined" />
    </div>
    <div>
    <TextField id="password"   placeholder="пароль" minLength="8" maxLength="16" type="password" required variant="outlined" />
    
    </div>
    <div >
     <Button style={{padding: '2px', color: '#000000'}}
      aria-label="fingerprint" color="success" type="submit" >Авторизоваться</Button>
   
     </div>
  </Box>



  );
}
export default Login;
