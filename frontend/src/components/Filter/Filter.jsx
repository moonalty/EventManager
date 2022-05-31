import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';

function Filter({ filter, setFilter}) {
  
 
   return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
        Фильтр
        </InputLabel>
        <NativeSelect
           defaultValue={filter}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
           onChange={(e)=>setFilter(e.target.value)}
        >
          <option value={'date'}>По дате</option>
          <option value={'cost'}>По стоимости</option>
         
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
export default Filter
