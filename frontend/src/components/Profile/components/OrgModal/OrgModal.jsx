import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, InputLabel, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import './orgModal.css'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { useSelector } from 'react-redux';



const ITEM_HEIGHT = 48;


function OrgModal({ active, setActive }, props) {
  const  {allCategories} = useSelector(state => state.allCategories)
  console.log(allCategories);
  console.log('ACTIVE STATE', active);
  const [people, setPeople] = React.useState('');
  const [categories, setCategories] = React.useState('')
  
  const categoriesChange = (event) => {
    setCategories(event.target.value)
  }
  const handleChange = (event) => {
    setPeople(event.target.value);
  }



  return (
    <div className={`modal_wrapper ${active ? 'open' : 'close'}`} onClick={() => setActive()}>
      <div  onClick={e => e.stopPropagation()}>


        <Card sx={{ maxWidth: 900 }} className='OrgModal_content'>

          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <TextField
            name='title'
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Название мероприятия"
            />
            <br/>
            <Select
            style={{ width: "400px", margin: "5px" }}
              id="demo-simple-select-helper"
              value={categories}
              displayEmpty
              placeholder="Категория мероприятия"
              onChange={categoriesChange}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Категория мероприятия</em>;
                }
                return selected.name;
              }}
            >
              {allCategories?.title?.map((category) => <MenuItem key={category.id} value={category}>{category.name}</MenuItem>)}
              
            </Select>
            <br />
            <TextField
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Дата начала мероприятия"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
            />
            <br />
            <TextField
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Дата окончания мероприятия"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
            />
            <br />
            <TextField
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Категория мероприятия"
            />
            <br />
            <TextField
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Стоимость"
            />
            <br />
            <Select
            style={{ width: "400px", margin: "5px" }}
              id="demo-simple-select-helper"
              value={people}
              displayEmpty
              placeholder="Количество участников"
              onChange={handleChange}
              renderValue={(selected) => {
            
                if (selected.length === 0) {
                  return <em>Количество участников</em>;
                }
                return selected;
              }}
            >
          
              
              <MenuItem value={'15'}>До 15</MenuItem>
              <MenuItem value={'20'}>До 20</MenuItem>
              <MenuItem value={'30'}>До 30</MenuItem>
            </Select>
            <br />
            <TextField
            style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Ссылка на сайт организатора"
            />
            <br />
               <TextField
               style={{ width: "400px", margin: "5px" }}
              id="outlined-required"
              label="Описание"
            />
            <br />
          </CardContent>

          <CardActions 
          style={{justifyContent:'center'}}>
            <Button size="small" color="primary"  >
              Сохранить мероприятие
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default OrgModal;
