import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';

 function Filter() {
   const [filter,setFilter] = useState('date')
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
        Фильтр
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => console.log(e.target.value)}
        >
          <option value={'date'}>По дате</option>
          <option value={'cost'}>По стоимости</option>
         
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
export default Filter
