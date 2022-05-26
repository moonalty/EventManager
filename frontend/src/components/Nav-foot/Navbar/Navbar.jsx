import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import Categories1 from '../Categories1/Categories1';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Categories1 />
        <LinkTab label="Поиск"  />
        <LinkTab label="Регистрация" onClick={() => navigate(`/registration`)} />
        <LinkTab label="Логин" onClick={() => navigate(`/login`)} />
      </Tabs>
    </Box>
  );
}

export default Navbar
