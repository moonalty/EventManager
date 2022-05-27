import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import Categories1 from '../Categories1/Categories1';
import { useDispatch } from 'react-redux';
import { getFetchLogout } from '../../../redux/thunk/asyncLogout';

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
   const navigate = useNavigate()
   const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const logout = () =>{
    dispatch(getFetchLogout())
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Categories1 />
        <LinkTab label="Логотип" onClick={() => navigate(`/`)} />
        <LinkTab label="Поиск"  />
        <LinkTab label="Регистрация" onClick={() => navigate(`/registration`)} />
        <LinkTab label="Логин" onClick={() => navigate(`/login`)} />
        <LinkTab label="Выйти" onClick={logout} />
      </Tabs>
    </Box>
  );
}

export default Navbar
