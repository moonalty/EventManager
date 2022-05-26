import { MenuItem } from '@mui/material';
import React from 'react';

function EachCategories({ eachcategory, handleClose}) {

  return (
    <>
      <MenuItem onClick={()=>handleClose(eachcategory.id)} disableRipple>
        {eachcategory.name}
      </MenuItem>
    </>
  );
}

export default EachCategories;
