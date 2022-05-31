
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



// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

function Navbar() {
  const [value, setValue] = React.useState(1);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {user} = useSelector(store=>store.user);
    

   React.useEffect(()=>{
    dispatch(sessionFetch())
   }, [dispatch])
   

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <Box sx={{ width: "100%" }} >

      <Tabs aria-label="nav tabs example" sx={{  height: '60px' }} >
        
        <img src="https://ktokyda.ru/shared/images/fe/logo.png?v=0.0.2" alt="" style={{ width: 144, height: 40, margin:10}} onClick={() => navigate(`/`)}/>
        <Search  />
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

