import React from "react";
import { useDispatch } from "react-redux";
import {  registrationFetch } from "../../redux/thunk/asyncReg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
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
  <Box className="registration"  onSubmit={addUser}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' , display: "box" , marginLeft: 'auto',
            marginRight:'auto', padding:'20', textAlign:'center'  },
          
          }}
          noValidate
          autoComplete="off"
        >
         <div >
          <TextField  id="name" type="text" placeholder="имя"  variant="filled" />
          <TextField id="email" placeholder="электронная почта"  variant="filled" />
          </div>
          <div>
          <TextField id="password"   placeholder="пароль" minLength="8" maxLength="16" type="password" required variant="filled" />
          <TextField id="password2"  placeholder="пароль" minLength="8" maxLength="16" type="password" required variant="filled" />
          </div>
          <div >
           <Button 
            variant="contained" type="submit" >Зарегистрироваться</Button>
           <Checkbox id="role" {...label} defaultChecked />Организатор 
           </div>
        </Box>
     
    
       




  );
}

export default Registration;
