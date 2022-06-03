
import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';


import { useSelector,useDispatch } from 'react-redux';
import { registrationFetch } from '../../../redux/thunk/asyncReg';
import { getFetchLogout } from '../../../redux/thunk/asyncLogout';
import { sessionFetch } from '../../../redux/thunk/asyncLogin';
import Search from '../Search/Search';
import Profile from '../ProfileNav/ProfileNav';
import { Avatar, ListItem, Stack } from '@mui/material';
import { margin } from '@mui/system';




function Navbar() {
  const [value, setValue] = React.useState(1);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {user} = useSelector(store=>store.user);
    
   
   React.useEffect(()=>{
      
        dispatch(sessionFetch())

    


   }, [])
   

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
console.log(user)

  return (

    <Box sx={{ width: "100%", height:'80px' }} >


      <Tabs aria-label="nav tabs example" sx={{ height: '100px' }} >
        
        <img src="/image/logo.png" alt="" style={{ width: 80, height: 80, marginLeft:10, marginRight:30}} onClick={() => navigate(`/`)}/>
        <Search  style={{marginRight: 300}}/>
        {Object.keys(user).length == 0 ? 
        <>
          <Tab label="Регистрация" onClick={() => navigate(`/registration`)} />
        <Tab label="Логин" onClick={() => navigate(`/login`)} />
          </> :
        <Profile />
        
      }
      </Tabs>
    </Box>
  );
}






export default Navbar;

