import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { ImageList, ImageListItem } from '@mui/material';
import OrgModal from '../OrgModal/OrgModal';
import { useSelector, useDispatch } from "react-redux";

export default function OrgProfile() {
  const {creators} = useSelector((state) => state.creators)
  console.log('CREATORS+++++++', creators);
  const [orgModalActive, setOrgModalActive] = React.useState(false)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Button variant="contained" endIcon={<SendIcon />} onClick={() => setOrgModalActive(true)}   >
              Добавить мероприятие
              
            </Button>
            <OrgModal active={orgModalActive} setActive={()=>setOrgModalActive(false)} />
            <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
              {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fb9pVwy2gp232EnXGqKtjSWVD_34DLmOOQ&usqp=CAU' /> */}
              {creators?.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=161&fit=crop&auto=format`}
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))} 
            </ImageList>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
