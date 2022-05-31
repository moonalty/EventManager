import { Avatar, ListItem, ListItemAvatar, ListItemText, MenuItem } from '@mui/material';
import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';

function EachCategories({ eachcategory, handleClose}) {

  return (
    // <>
    //   <MenuItem onClick={()=>handleClose(eachcategory.id)} disableRipple>
    //     {eachcategory.name}
    //   </MenuItem>
    // </>

    <ListItem className='ListItemCategories' onClick={() => handleClose(eachcategory.id)}>
      <ListItemAvatar>
        <Avatar>
          <FlagIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={eachcategory.name}  />
    </ListItem>
  );
}

export default EachCategories;
