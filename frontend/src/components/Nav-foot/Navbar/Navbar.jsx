
import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import Categories1 from '../Categories1/Categories1';

import { useSelector,useDispatch } from 'react-redux';
import { registrationFetch } from '../../../redux/thunk/asyncReg';
import { getFetchLogout } from '../../../redux/thunk/asyncLogout';
import { sessionFetch } from '../../../redux/thunk/asyncReg';
import Search from '../Search/Search';
import Profile from '../ProfileNav/ProfileNav';
import { Avatar, ListItem, Stack } from '@mui/material';
import { margin } from '@mui/system';



function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Navbar() {
  const [value, setValue] = React.useState(1);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {user} = useSelector(store=>store.user);

   React.useEffect(()=>{
    dispatch(sessionFetch())
   },[])
   

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: "100%", height:'100px' ,backgroundColor:'#ffef62'}} >
      <Tabs aria-label="nav tabs example" sx={{ paddingY: '20px', height: '100px'}} centered>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" style={{ width: 144, height: 40, margin:10}} onClick={() => navigate(`/`)}/>
        <Search />
        {Object.keys(user).length == 0 ? 
        <>
        <LinkTab label="Регистрация" onClick={() => navigate(`/registration`)} />
        <LinkTab label="Логин" onClick={() => navigate(`/login`)} />
          </> :
        <Profile />
        
      }
      </Tabs>
    </Box>
  );
}

export default Navbar;
