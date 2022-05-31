import React from "react";
import { useDispatch } from "react-redux";
import {  registrationFetch } from "../../redux/thunk/asyncReg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function Registration() {
  const dispatch = useDispatch();
  
  const addUser = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      role: e.target.role.checked,
  
    }; 
      dispatch(registrationFetch(data));  
  };

  return (
  <Box onSubmit={addUser}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' , display: "box" , marginLeft: 'auto',
            marginRight:'auto', padding:'20', textAlign:'center'  },
          
          }}
          noValidate
          autoComplete="off"
        >
         <div >
        <TextField   id="name"  type="text" placeholder="имя" required variant="outlined" />
        <TextField id="email" placeholder="электронная почта" required  variant="outlined" />
          </div>
          <div>
        <TextField id="password" placeholder="пароль" minLength="8" maxLength="16" type="password" required variant="outlined" />
          <TextField id="password2"  placeholder="пароль" minLength="8" maxLength="16" type="password" required variant="outlined" />
          </div>
          <div >
           <Button 
            aria-label="fingerprint" color="success" type="submit" >Зарегистрироваться</Button>
          <h>Организатор</h>
          
           <Switch  id="role" {...label} defaultChecked size="small" />
           </div>
        </Box>
     
    
       




  );
}

export default Registration;
